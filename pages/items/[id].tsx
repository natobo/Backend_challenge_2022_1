import React from 'react'
import { PageLayout } from '../../src/components/templates/page-layout/page-layout'
import { ProductDescription } from '../../src/components/organisms/product-description/product-description'
import { Breadcrumb } from '../../src/components/molecules/breadcrumb/breadcrumb'
import { GetServerSideProps } from 'next'
import { IItemData } from '../../src/interfaces/IInternalItemResponse'

type Props = {
  item?: IItemData
}

export default function ItemById({
  item,
  item: { path_from_root: categories },
}: Props) {
  return (
    <PageLayout>
      <Breadcrumb {...{ categories }} />
      <ProductDescription {...{ item }} />
    </PageLayout>
  )
}

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
    
  } catch (error) {
  }
}
