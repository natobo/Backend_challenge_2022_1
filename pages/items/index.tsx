import React from 'react';
import { GetServerSideProps } from 'next';
import { PageLayout } from '../../src/components/templates/page-layout/page-layout';
import { Breadcrumb } from '../../src/components/molecules/breadcrumb/breadcrumb';
import { UISearchResult } from '../../src/components/organisms/ui-search-result/ui-search-result';

import { ICategory, IItem } from '../../src/interfaces/IInternalSearchResponse';
import { SkeletonCard } from '../../src/components/molecules/skeleton-card/skeleton-card';

type Props = {
  items?: IItem[];
  categories?: ICategory[];
};

export type ResponseAPIQueryMLA = {
  results: {
    id: string;
    title: string;
    thumbnail: string;
    price: number;
    currency_id: string;
    shipping: {
      free_shipping: boolean;
    };
    condition: string;
    free_shipping: boolean;
    seller_address: {
      id: string;
    };
  }[];
  available_filters: {
    id: string;
    name: string;
  }[];
};

export default function ItemsSearchs({ items, categories }: Props) {
  return (
    <PageLayout>
      <Breadcrumb {...{ categories }} />
      {/* Skeleton Null Safe */}
      {items && items.length > 0 ? (
        <UISearchResult {...{ items }} />
      ) : (
        <SkeletonCard />
      )}
    </PageLayout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  /*
  Debes llamar la URL "http://localhost:3000/api/items?q={BUSQUEDA}" utilizando un fetch
  
  Ejemplo:
  
  const { XX, YY } = await fetch(
    URL_API + `?q=${ctx.query.search}`
    ).then((res) => res.json())
    
    return {
      props: {
        XX,
        YY,
      },
    }
  } catch (error) {
  }
  
  // Fetch data from API on SSR
  
  */

  try {
    // RETO UNO, DIGITE SU CODIGO ACÁ
    const URL_API = `https://api.mercadolibre.com/sites/MLA/search?q=`;
    const response = await fetch(URL_API + (ctx.query.search as string));
    const dataProps = (await response.json()) as ResponseAPIQueryMLA;
    // Map Response Items into IItem objects
    const items: IItem[] = dataProps.results.map((itemRes) => ({
      id: itemRes.id,
      title: itemRes.title,
      price: {
        currency: itemRes.currency_id,
        decimals: itemRes.price % 1,
        amount: itemRes.price,
      },
      picture: itemRes.thumbnail,
      condition: itemRes.condition,
      free_shipping: itemRes.shipping.free_shipping,
      seller_address: itemRes.seller_address.id,
    }));

    // Logica adicional para obtener datos de la categoria.
    const categories: ICategory[] = dataProps.available_filters;
    return {
      props: {
        items,
        categories,
      },
    };
  } catch (error) {
    console.error('Error en el fetch del API de mercado libre: ', error);
  }
};
