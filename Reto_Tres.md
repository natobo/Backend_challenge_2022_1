
# Reto Tres

En el archivo pages/api/items/index.ts debes acomodar la función mapItems para devolver la estructura de respuesta indicada con el consumo de la API de mercado libre


## Estructura de respuesta **ItemsReduce**


```
type ItemsReduce = {
  items: IItem[]
  categoryHistogram: CategoryHistogram
}
````
## Estructura  **IItem**

```
export interface IItem {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  free_shipping: boolean
  seller_address: string // add
}
```

## Estructura  **categoryHistogram**

````
type CategoryHistogram = {
  [key: string]: number
}
````

```
[
  {
    id: 'MLA907407144',
    site_id: 'MLA',
    title: 'Caniches Toy Mini Machos  Hermosos',
    seller: {
      id: 277632176,
      permalink: 'http://perfil.mercadolibre.com.ar/LAMAGICAMTZ',
      registration_date: '2017-10-10T09:56:13.000-04:00',
      car_dealer: false,
      real_estate_agency: false,
      tags: [Array],
      seller_reputation: [Object]
    },
    price: 23000,
    prices: {
      id: 'MLA907407144',
      prices: [Array],
      presentation: [Object],
      payment_method_prices: [],
      reference_prices: [Array],
      purchase_discounts: []
    },
    sale_price: null,
    currency_id: 'ARS',
    available_quantity: 1,
    sold_quantity: 25,
    buying_mode: 'buy_it_now',
    listing_type_id: 'gold_special',
    stop_time: '2041-02-01T04:00:00.000Z',
    condition: 'new',
    permalink: 'https://articulo.mercadolibre.com.ar/MLA-907407144-caniches-toy-mini-machos-hermosos-_JM',
    thumbnail: 'http://http2.mlstatic.com/D_849960-MLA45141758316_032021-O.jpg',
    thumbnail_id: '849960-MLA45141758316_032021',
    accepts_mercadopago: true,
    installments: { quantity: 12, amount: 3261.59, rate: 70.17, currency_id: 'ARS' },
    address: {
      state_id: 'AR-B',
      state_name: 'Buenos Aires',
      city_id: 'TUxBQ0xBTWF0YW56',
      city_name: 'La Matanza'
    },
    shipping: {
      free_shipping: false,
      mode: 'not_specified',
      tags: [],
      logistic_type: 'not_specified',
      store_pick_up: false
    },
    seller_address: {
      id: '',
      comment: '',
      address_line: '',
      zip_code: '',
      country: [Object],
      state: [Object],
      city: [Object],
      latitude: '',
      longitude: ''
    },
    attributes: [ [Object], [Object] ],
    original_price: null,
    category_id: 'MLA1073',
    official_store_id: null,
    domain_id: 'MLA-PUREBRED_DOGS',
    catalog_product_id: null,
    tags: [
      'good_quality_picture',
      'good_quality_thumbnail',
      'loyalty_discount_eligible',
      'immediate_payment'
    ],
    order_backend: 1,
    use_thumbnail_id: false,
    offer_score: null,
    offer_share: null,
    match_score: null,
    winner_item_id: null,
    melicoin: null
  },
  {
    id: 'MLA899416837',
    site_id: 'MLA',
    title: 'Caniche Toy Mini (raza Pura)  ',
    seller: {
      id: 401846077,
      permalink: 'http://perfil.mercadolibre.com.ar/LEVA7959257',
      registration_date: '2019-02-07T09:06:01.000-04:00',
      car_dealer: false,
      real_estate_agency: false,
      tags: [Array],
      seller_reputation: [Object]
    },
    price: 12000,
    prices: {
      id: 'MLA899416837',
      prices: [Array],
      presentation: [Object],
      payment_method_prices: [],
      reference_prices: [],
      purchase_discounts: []
    },
    sale_price: null,
    currency_id: 'ARS',
    available_quantity: 1,
    sold_quantity: 5,
    buying_mode: 'buy_it_now',
    listing_type_id: 'gold_pro',
    stop_time: '2041-11-24T09:00:41.000Z',
    condition: 'new',
    permalink: 'https://articulo.mercadolibre.com.ar/MLA-899416837-caniche-toy-mini-raza-pura-_JM',
    thumbnail: 'http://http2.mlstatic.com/D_600116-MLA43647472505_102020-O.jpg',
    thumbnail_id: '600116-MLA43647472505_102020',
    accepts_mercadopago: true,
    installments: { quantity: 6, amount: 2000, rate: 0, currency_id: 'ARS' },
    address: {
      state_id: 'AR-B',
      state_name: 'Buenos Aires',
      city_id: 'TUxBQ0FWRTc5OTQ1',
      city_name: 'Avellaneda'
    },
    shipping: {
      free_shipping: false,
      mode: 'not_specified',
      tags: [],
      logistic_type: 'not_specified',
      store_pick_up: false
    },
    seller_address: {
      id: '',
      comment: '',
      address_line: '',
      zip_code: '',
      country: [Object],
      state: [Object],
      city: [Object],
      latitude: '',
      longitude: ''
    },
    attributes: [ [Object], [Object] ],
    differential_pricing: { id: 33678187 },
    original_price: null,
    category_id: 'MLA1073',
    official_store_id: null,
    domain_id: 'MLA-PUREBRED_DOGS',
    catalog_product_id: 'MLA6509242',
    tags: [
      'good_quality_picture',
      'good_quality_thumbnail',
      'loyalty_discount_eligible',
      'immediate_payment'
    ],
    order_backend: 2,
    use_thumbnail_id: false,
    offer_score: null,
    offer_share: null,
    match_score: null,
    winner_item_id: null,
    melicoin: null
  },
  {
    id: 'MLA1108161697',
    site_id: 'MLA',
    title: 'Cachorros Golden Retriever 10',
    seller: {
      id: 75159712,
      permalink: 'http://perfil.mercadolibre.com.ar/ISMAARRU',
      registration_date: '2004-08-18T17:24:26.000-04:00',
      car_dealer: false,
      real_estate_agency: false,
      tags: [Array],
      seller_reputation: [Object]
    },
    price: 75000,
    prices: {
      id: 'MLA1108161697',
      prices: [Array],
      presentation: [Object],
      payment_method_prices: [],
      reference_prices: [Array],
      purchase_discounts: []
    },
    sale_price: null,
    currency_id: 'ARS',
    available_quantity: 1,
    sold_quantity: 5,
    buying_mode: 'buy_it_now',
    listing_type_id: 'gold_pro',
    stop_time: '2041-10-09T11:53:27.000Z',
    condition: 'new',
    permalink: 'https://articulo.mercadolibre.com.ar/MLA-1108161697-cachorros-golden-retriever-10-_JM',
    thumbnail: 'http://http2.mlstatic.com/D_957099-MLA47871728191_102021-O.jpg',
    thumbnail_id: '957099-MLA47871728191_102021',
    accepts_mercadopago: true,
    installments: { quantity: 6, amount: 12500, rate: 0, currency_id: 'ARS' },
    address: {
      state_id: 'AR-C',
      state_name: 'Capital Federal',
      city_id: 'TUxBQlJFQzkyMTVa',
      city_name: 'Recoleta'
    },
    shipping: {
      free_shipping: false,
      mode: 'not_specified',
      tags: [],
      logistic_type: 'not_specified',
      store_pick_up: false
    },
    seller_address: {
      id: '',
      comment: '',
      address_line: '',
      zip_code: '',
      country: [Object],
      state: [Object],
      city: [Object],
      latitude: '',
      longitude: ''
    },
    attributes: [ [Object], [Object] ],
    differential_pricing: { id: 33678187 },
    original_price: null,
    category_id: 'MLA1073',
    official_store_id: null,
    domain_id: 'MLA-PUREBRED_DOGS',
    catalog_product_id: 'MLA6452795',
    tags: [
      'loyalty_discount_eligible',
      'good_quality_picture',
      'good_quality_thumbnail',
      'immediate_payment'
    ],
    order_backend: 3,
    use_thumbnail_id: false,
    offer_score: null,
    offer_share: null,
    match_score: null,
    winner_item_id: null,
    melicoin: null
  },
  {
    id: 'MLA935420640',
    site_id: 'MLA',
    title: 'Chihuahua /s Negro. Y Más',
    seller: {
      id: 545041678,
      permalink: 'http://perfil.mercadolibre.com.ar/SAME8117962',
      registration_date: '2020-04-11T16:27:51.000-04:00',
      car_dealer: false,
      real_estate_agency: false,
      tags: [Array],
      seller_reputation: [Object]
    },
    price: 56000,
    prices: {
      id: 'MLA935420640',
      prices: [Array],
      presentation: [Object],
      payment_method_prices: [],
      reference_prices: [Array],
      purchase_discounts: []
    },
    sale_price: null,
    currency_id: 'ARS',
    available_quantity: 1,
    sold_quantity: 0,
    buying_mode: 'buy_it_now',
    listing_type_id: 'gold_special',
    stop_time: '2041-11-06T03:42:48.000Z',
    condition: 'new',
    permalink: 'https://articulo.mercadolibre.com.ar/MLA-935420640-chihuahua-s-negro-y-mas-_JM',
    thumbnail: 'http://http2.mlstatic.com/D_824228-MLA47709707425_092021-O.jpg',
    thumbnail_id: '824228-MLA47709707425_092021',
    accepts_mercadopago: true,
    installments: { quantity: 12, amount: 7941.27, rate: 70.17, currency_id: 'ARS' },
    address: {
      state_id: 'AR-C',
      state_name: 'Capital Federal',
      city_id: 'TUxBQkJFTDU5NzNa',
      city_name: 'Belgrano R'
    },
    shipping: {
      free_shipping: false,
      mode: 'not_specified',
      tags: [],
      logistic_type: 'not_specified',
      store_pick_up: false
    },
    seller_address: {
      id: '',
      comment: '',
      address_line: '',
      zip_code: '',
      country: [Object],
      state: [Object],
      city: [Object],
      latitude: '',
      longitude: ''
    },
    attributes: [ [Object], [Object] ],
    original_price: null,
    category_id: 'MLA1073',
    official_store_id: null,
    domain_id: 'MLA-PUREBRED_DOGS',
    catalog_product_id: 'MLA6417229',
    tags: [
      'good_quality_thumbnail',
      'loyalty_discount_eligible',
      'good_quality_picture',
      'immediate_payment'
    ],
    order_backend: 4,
    use_thumbnail_id: false,
    offer_score: null,
    offer_share: null,
    match_score: null,
    winner_item_id: null,
    melicoin: null
  },
  {
    id: 'MLA814557200',
    site_id: 'MLA',
    title: 'Cachorros Bull Dog Francés Vaquita',
    seller: {
      id: 210125078,
      permalink: 'http://perfil.mercadolibre.com.ar/TEMOC2016',
      registration_date: '2016-04-25T22:26:02.000-04:00',
      car_dealer: false,
      real_estate_agency: false,
      tags: [Array],
      seller_reputation: [Object]
    },
    price: 55000,
    prices: {
      id: 'MLA814557200',
      prices: [Array],
      presentation: [Object],
      payment_method_prices: [],
      reference_prices: [Array],
      purchase_discounts: []
    },
    sale_price: null,
    currency_id: 'ARS',
    available_quantity: 1,
    sold_quantity: 1,
    buying_mode: 'buy_it_now',
    listing_type_id: 'gold_special',
    stop_time: '2041-11-17T13:44:56.000Z',
    condition: 'new',
    permalink: 'https://articulo.mercadolibre.com.ar/MLA-814557200-cachorros-bull-dog-frances-vaquita-_JM',
    thumbnail: 'http://http2.mlstatic.com/D_827059-MLA45857584877_052021-O.jpg',
    thumbnail_id: '827059-MLA45857584877_052021',
    accepts_mercadopago: true,
    installments: { quantity: 12, amount: 7799.46, rate: 70.17, currency_id: 'ARS' },
    address: {
      state_id: 'AR-B',
      state_name: 'Buenos Aires',
      city_id: 'TUxBQ01BUjk5Njc',
      city_name: 'Marcos Paz'
    },
    shipping: {
      free_shipping: false,
      mode: 'not_specified',
      tags: [],
      logistic_type: 'not_specified',
      store_pick_up: false
    },
    seller_address: {
      id: '',
      comment: '',
      address_line: '',
      zip_code: '',
      country: [Object],
      state: [Object],
      city: [Object],
      latitude: '',
      longitude: ''
    },
    attributes: [ [Object], [Object] ],
    original_price: null,
    category_id: 'MLA1073',
    official_store_id: null,
    domain_id: 'MLA-PUREBRED_DOGS',
    catalog_product_id: 'MLA6452794',
    tags: [
      'good_quality_picture',
      'good_quality_thumbnail',
      'immediate_payment'
    ],
    order_backend: 5,
    use_thumbnail_id: false,
    offer_score: null,
    offer_share: null,
    match_score: null,
    winner_item_id: null,
    melicoin: null
  },
  {
    id: 'MLA1111053924',
    site_id: 'MLA',
    title: 'Chow Chow H&m Color Crema Casi Blancos (leer Descripcion)',
    seller: {
      id: 158729331,
      permalink: 'http://perfil.mercadolibre.com.ar/ESTEBANFEDERICORUEDA',
      registration_date: '2014-05-12T20:46:04.000-04:00',
      car_dealer: false,
      real_estate_agency: false,
      tags: [Array],
      seller_reputation: [Object]
    },
    price: 1000,
    prices: {
      id: 'MLA1111053924',
      prices: [Array],
      presentation: [Object],
      payment_method_prices: [],
      reference_prices: [Array],
      purchase_discounts: []
    },
    sale_price: null,
    currency_id: 'ARS',
    available_quantity: 1,
    sold_quantity: 5,
    buying_mode: 'buy_it_now',
    listing_type_id: 'gold_pro',
    stop_time: '2041-10-29T04:00:00.000Z',
    condition: 'new',
    permalink: 'https://articulo.mercadolibre.com.ar/MLA-1111053924-chow-chow-hm-color-crema-casi-blancos-leer-descripcion-_JM',
    thumbnail: 'http://http2.mlstatic.com/D_852379-MLA48113526722_112021-O.jpg',
    thumbnail_id: '852379-MLA48113526722_112021',
    accepts_mercadopago: true,
    installments: { quantity: 6, amount: 166.67, rate: 0, currency_id: 'ARS' },
    address: {
      state_id: 'AR-C',
      state_name: 'Capital Federal',
      city_id: null,
      city_name: 'Lugano'
    },
    shipping: {
      free_shipping: false,
      mode: 'not_specified',
      tags: [],
      logistic_type: 'not_specified',
      store_pick_up: false
    },
    seller_address: {
      id: '',
      comment: '',
      address_line: '',
      zip_code: '',
      country: [Object],
      state: [Object],
      city: [Object],
      latitude: '',
      longitude: ''
    },
    attributes: [ [Object], [Object] ],
    differential_pricing: { id: 33678187 },
    original_price: null,
    category_id: 'MLA1073',
    official_store_id: null,
    domain_id: 'MLA-PUREBRED_DOGS',
    catalog_product_id: null,
    tags: [
      'good_quality_picture',
      'good_quality_thumbnail',
      'immediate_payment',
      'best_seller_candidate'
    ],
    order_backend: 6,
    use_thumbnail_id: false,
    offer_score: null,
    offer_share: null,
    match_score: null,
    winner_item_id: null,
    melicoin: null
  },
  {
    id: 'MLA930329712',
    site_id: 'MLA',
    title: 'Cachorros Border Collie!pompones!! ',
    seller: {
      id: 240170865,
      permalink: 'http://perfil.mercadolibre.com.ar/SILVIAPARETS',
      registration_date: '2017-01-08T18:45:48.000-04:00',
      car_dealer: false,
      real_estate_agency: false,
      tags: [Array],
      seller_reputation: [Object]
    },
    price: 36000,
    prices: {
      id: 'MLA930329712',
      prices: [Array],
      presentation: [Object],
      payment_method_prices: [],
      reference_prices: [Array],
      purchase_discounts: []
    },
    sale_price: null,
    currency_id: 'ARS',
    available_quantity: 1,
    sold_quantity: 5,
    buying_mode: 'buy_it_now',
    listing_type_id: 'gold_special',
    stop_time: '2041-07-16T04:00:00.000Z',
    condition: 'new',
    permalink: 'https://articulo.mercadolibre.com.ar/MLA-930329712-cachorros-border-colliepompones-_JM',
    thumbnail: 'http://http2.mlstatic.com/D_737501-MLA48832263076_012022-O.jpg',
    thumbnail_id: '737501-MLA48832263076_012022',
    accepts_mercadopago: true,
    installments: { quantity: 12, amount: 5105.1, rate: 70.17, currency_id: 'ARS' },
    address: {
      state_id: 'AR-C',
      state_name: 'Capital Federal',
      city_id: 'TUxBQkZMTzMwNzRa',
      city_name: 'Flores'
    },
    shipping: {
      free_shipping: false,
      mode: 'not_specified',
      tags: [],
      logistic_type: 'not_specified',
      store_pick_up: false
    },
    seller_address: {
      id: '',
      comment: '',
      address_line: '',
      zip_code: '',
      country: [Object],
      state: [Object],
      city: [Object],
      latitude: '',
      longitude: ''
    },
    attributes: [ [Object], [Object] ],
    original_price: null,
    category_id: 'MLA1073',
    official_store_id: null,
    domain_id: 'MLA-PUREBRED_DOGS',
    catalog_product_id: 'MLA6570286',
    tags: [
      'good_quality_picture',
      'good_quality_thumbnail',
      'loyalty_discount_eligible',
      'immediate_payment',
      'best_seller_candidate'
    ],
    order_backend: 7,
    use_thumbnail_id: false,
    offer_score: null,
    offer_share: null,
    match_score: null,
    winner_item_id: null,
    melicoin: null
  },
  {
    id: 'MLA877340492',
    site_id: 'MLA',
    title: 'Mini Caniche Toy (raza Pura)  ',
    seller: {
      id: 401846077,
      permalink: 'http://perfil.mercadolibre.com.ar/LEVA7959257',
      registration_date: '2019-02-07T09:06:01.000-04:00',
      car_dealer: false,
      real_estate_agency: false,
      tags: [Array],
      seller_reputation: [Object]
    },
    price: 15000,
    prices: {
      id: 'MLA877340492',
      prices: [Array],
      presentation: [Object],
      payment_method_prices: [],
      reference_prices: [],
      purchase_discounts: []
    },
    sale_price: null,
    currency_id: 'ARS',
    available_quantity: 1,
    sold_quantity: 5,
    buying_mode: 'buy_it_now',
    listing_type_id: 'gold_special',
    stop_time: '2040-09-02T04:00:00.000Z',
    condition: 'new',
    permalink: 'https://articulo.mercadolibre.com.ar/MLA-877340492-mini-caniche-toy-raza-pura-_JM',
    thumbnail: 'http://http2.mlstatic.com/D_870363-MLA43647463935_102020-O.jpg',
    thumbnail_id: '870363-MLA43647463935_102020',
    accepts_mercadopago: true,
    installments: { quantity: 12, amount: 2127.13, rate: 70.17, currency_id: 'ARS' },
    address: {
      state_id: 'AR-B',
      state_name: 'Buenos Aires',
      city_id: 'TUxBQ0FWRTc5OTQ1',
      city_name: 'Avellaneda'
    },
    shipping: {
      free_shipping: false,
      mode: 'not_specified',
      tags: [],
      logistic_type: 'not_specified',
      store_pick_up: false
    },
    seller_address: {
      id: '',
      comment: '',
      address_line: '',
      zip_code: '',
      country: [Object],
      state: [Object],
      city: [Object],
      latitude: '',
      longitude: ''
    },
    attributes: [ [Object], [Object] ],
    original_price: null,
    category_id: 'MLA1073',
    official_store_id: null,
    domain_id: 'MLA-PUREBRED_DOGS',
    catalog_product_id: 'MLA6509242',
    tags: [
      'good_quality_picture',
      'good_quality_thumbnail',
      'loyalty_discount_eligible',
      'immediate_payment'
    ],
    order_backend: 8,
    use_thumbnail_id: false,
    offer_score: null,
    offer_share: null,
    match_score: null,
    winner_item_id: null,
    melicoin: null
  }
]

```

# Ejemplo Salida (return)



```
{
  items: [
    {
      id: 'MLA907407144',
      title: 'Caniches Toy Mini Machos  Hermosos',
      price: [Object],
      picture: 'http://http2.mlstatic.com/D_849960-MLA45141758316_032021-O.jpg',
      condition: 'new',
      free_shipping: false,
      seller_address: 'Buenos Aires'
    },
    {
      id: 'MLA899416837',
      title: 'Caniche Toy Mini (raza Pura)  ',
      price: [Object],
      picture: 'http://http2.mlstatic.com/D_600116-MLA43647472505_102020-O.jpg',
      condition: 'new',
      free_shipping: false,
      seller_address: 'Buenos Aires'
    },
    {
      id: 'MLA1108161697',
      title: 'Cachorros Golden Retriever 10',
      price: [Object],
      picture: 'http://http2.mlstatic.com/D_957099-MLA47871728191_102021-O.jpg',
      condition: 'new',
      free_shipping: false,
      seller_address: 'Capital Federal'
    },
    {
      id: 'MLA935420640',
      title: 'Chihuahua /s Negro. Y Más',
      price: [Object],
      picture: 'http://http2.mlstatic.com/D_824228-MLA47709707425_092021-O.jpg',
      condition: 'new',
      free_shipping: false,
      seller_address: 'Capital Federal'
    },
    {
      id: 'MLA814557200',
      title: 'Cachorros Bull Dog Francés Vaquita',
      price: [Object],
      picture: 'http://http2.mlstatic.com/D_827059-MLA45857584877_052021-O.jpg',
      condition: 'new',
      free_shipping: false,
      seller_address: 'Buenos Aires'
    },
    {
      id: 'MLA1111053924',
      title: 'Chow Chow H&m Color Crema Casi Blancos (leer Descripcion)',
      price: [Object],
      picture: 'http://http2.mlstatic.com/D_852379-MLA48113526722_112021-O.jpg',
      condition: 'new',
      free_shipping: false,
      seller_address: 'Capital Federal'
    },
    {
      id: 'MLA930329712',
      title: 'Cachorros Border Collie!pompones!! ',
      price: [Object],
      picture: 'http://http2.mlstatic.com/D_737501-MLA48832263076_012022-O.jpg',
      condition: 'new',
      free_shipping: false,
      seller_address: 'Capital Federal'
    },
    {
      id: 'MLA877340492',
      title: 'Mini Caniche Toy (raza Pura)  ',
      price: [Object],
      picture: 'http://http2.mlstatic.com/D_870363-MLA43647463935_102020-O.jpg',
      condition: 'new',
      free_shipping: false,
      seller_address: 'Buenos Aires'
    }
  ],
  categoryHistogram: { MLA1073: 8 }
}
```