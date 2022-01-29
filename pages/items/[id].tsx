import React from 'react';
import { GetServerSideProps } from 'next';
import { title } from 'process';
import { PageLayout } from '../../src/components/templates/page-layout/page-layout';
import { ProductDescription } from '../../src/components/organisms/product-description/product-description';
import { Breadcrumb } from '../../src/components/molecules/breadcrumb/breadcrumb';
import { IItemData } from '../../src/interfaces/IInternalItemResponse';
import { ResponseAPIQueryMLA } from './index';
import { ICategory } from '../../src/interfaces/IInternalSearchResponse';

type Props = {
  item?: IItemData;
};

type ResponseAPIDetailItem = {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
  thumbnail: string;
  sold_quantity: number;
};

type ResponseAPIDetailDescription = {
  plain_text: string;
};

export default function ItemById({
  item,
  item: { path_from_root: categories },
}: Props) {
  return (
    <PageLayout>
      <Breadcrumb {...{ categories }} />
      <ProductDescription {...{ item }} />
    </PageLayout>
  );
}

const getResponseCategories = async (param: string) => {
  const URL_API_QUERY = `https://api.mercadolibre.com/sites/MLA/search?q=`;
  const response = await fetch(URL_API_QUERY + param);
  const dataProps = (await response.json()) as ResponseAPIQueryMLA;
  return dataProps.available_filters;
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  /*

  URL para capturar la data del objeto es: "http://localhost:3000/api/items/{ID_ITEM}"
  Ejemplo de la URL: "http://localhost:3000/api/items/MLA928804696"

  Debe retornar un objeto con el json
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  Ejemplo del json a retornar:
{
  id: 'MLA928804696',
  condition: 'new',
  description: 'Adopción responsable de Gatos de distintos tamaños y colores son abandonados y están en busca de un hogar. No cancelo la venta si se arrepienten.',
  free_shipping: false,
  picture: 'https://http2.mlstatic.com/D_713697-MLA48691036240_122021-O.jpg',
  price: { currency: 'ARS', amount: 65, decimals: 0 },
  sold_quantity: 100,
  title: 'Gatos / Perros Adopción Responsable Pregunte Antes Deofertar',
  path_from_root: [
    { id: 'MLA1071', name: 'Animales y Mascotas' },
    { id: 'MLA1081', name: 'Gatos' },
    { id: 'MLA1082', name: 'Gatos' }
  ]
}
  ///////////////////////////////////////////////////////////////////////////////////////////////////////


  */
  // Fetch data from API on SSR
  try {
    // RETO DOS, DIGITE SU CODIGO ACÁ
    const URL_API_DETAIL = `https://api.mercadolibre.com/items/`;
    const responseDetail = await fetch(
      URL_API_DETAIL + (ctx.params.id as string)
    );
    const reponseDescription = await fetch(
      `${URL_API_DETAIL + (ctx.params.id as string)}/description`
    );
    const dataDetail = (await responseDetail.json()) as ResponseAPIDetailItem;
    const dataDescription =
      (await reponseDescription.json()) as ResponseAPIDetailDescription;
    const objCategories = await getResponseCategories(
      dataDetail.title.split(` `)[0]
    );
    // Map Response Item into IItem object
    return {
      props: {
        item: {
          id: dataDetail.id,
          title: dataDetail.title,
          price: {
            currency: dataDetail.currency_id,
            decimals: dataDetail.price % 1,
            amount: dataDetail.price,
          },
          picture: dataDetail.thumbnail,
          condition: dataDetail.condition,
          free_shipping: dataDetail.shipping.free_shipping,
          description: dataDescription.plain_text,
          sold_quantity: dataDetail.sold_quantity,
          path_from_root: objCategories,
        },
      },
    };
  } catch (error) {
    console.error('Error en el fetch del API de mercado libre: ', error);
  }
};
