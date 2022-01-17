
#Reto uno

En este reto debe realizar lo siguiente:

 - cambiar el autor del código (SIGNATURE_AUTHOR) por su nombre (name) y sus apellidos (lastname)

 - Debe configurar el archivo pages/items/index.tsx para consumir la URL "http://localhost:3000/api/items?q={BUSQUEDA}" utilizando un fetch
  
  Ejemplo:
````
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
  ````

  El json que debe traer debe tener una estructura como la presentada en el siguiente ejemplo:

 ## ITEMS  

```
[
  {
    id: 'MLA928804696',
    title: 'Gatos / Perros Adopción Responsable Pregunte Antes Deofertar',
    price: { currency: 'ARS', amount: 65, decimals: 0 },
    picture: 'http://http2.mlstatic.com/D_713697-MLA48691036240_122021-I.jpg',
    condition: 'new',
    free_shipping: false,
    seller_address: 'Capital Federal'
  },
  {
    id: 'MLA1118042726',
    title: 'Gatitos En  Adopción Nacidos |14/11/21',
    price: { currency: 'ARS', amount: 65, decimals: 0 },
    picture: 'http://http2.mlstatic.com/D_697705-MLA48843944038_012022-I.jpg',
    condition: 'new',
    free_shipping: false,
    seller_address: 'Capital Federal'
  },
  {
    id: 'MLA900883125',
    title: 'Gatitos En  Adopcion',
    price: { currency: 'ARS', amount: 100, decimals: 0 },
    picture: 'http://http2.mlstatic.com/D_970609-MLA48808543810_012022-I.jpg',
    condition: 'new',
    free_shipping: false,
    seller_address: 'Buenos Aires'
  },
  {
    id: 'MLA901632014',
    title: 'Gatitas Persas,exoticas E Himalayas, Cartilla Sanitaria',
    price: { currency: 'ARS', amount: 65000, decimals: 0 },
    picture: 'http://http2.mlstatic.com/D_818849-MLA48082256265_102021-I.jpg',
    condition: 'new',
    free_shipping: false,
    seller_address: 'Córdoba'
  }
] 
```

</BR>

##  CATEGORIAS 

```
[
  { id: 'MLA1071', name: 'Animales y Mascotas' },
  { id: 'MLA1081', name: 'Gatos' },
  { id: 'MLA1082', name: 'Gatos' }
]
```