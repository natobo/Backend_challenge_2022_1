
# Reto Cuatro

En el archivo pages/api/items/[id].ts en la función "getCategoriesPathFromRoot" realiace el consumo de la URL https://api.mercadolibre.com/categories/{categoryId} y retorne la estructura **ICategory**

```
export interface ICategory {
  id: string
  name: string
}
```