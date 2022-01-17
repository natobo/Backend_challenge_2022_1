
#Reto Dos

En este reto debe realizar lo siguiente:

 - Debe aumentar el número de items traidos en la paginación de 4 a 8 (ITEMS_LIMIT)

 - Debe configurar el archivo pages/items/[id].tsx para consumir la URL para capturar que traerá la data: "http://localhost:3000/api/items/{ID_ITEM}"
  
  
  ## Ejemplo de la URL: 
  "http://localhost:3000/api/items/MLA928804696"

  Debe retornar un objeto con el json
  

 ## Ejemplo del json a retornar:

  ```
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

```