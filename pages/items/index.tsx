import React from 'react'
import { PageLayout } from '../../src/components/templates/page-layout/page-layout'
import { Breadcrumb } from '../../src/components/molecules/breadcrumb/breadcrumb'
import { UISearchResult } from '../../src/components/organisms/ui-search-result/ui-search-result'

import { GetServerSideProps } from 'next'
import { ICategory, IItem } from '../../src/interfaces/IInternalSearchResponse'
import { SkeletonCard } from '../../src/components/molecules/skeleton-card/skeleton-card'

type Props = {
  items?: IItem[]
  categories?: ICategory[]
}

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
  )
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
  } catch (error) {
  }
}
