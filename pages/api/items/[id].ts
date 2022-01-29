// TODO: refactor code with  SRP (singular responsibility principle)
import { NextApiRequest, NextApiResponse } from 'next';

import * as MeliEndPoints from '../../../src/common/meli-endponts';

// INTERFACES
import { IInternalItemResponse } from '../../../src/interfaces/IInternalItemResponse';
import { ICategoryResponse } from '../../../src/interfaces/ICategoryResponse';
import { ICategory } from '../../../src/interfaces/IInternalSearchResponse';
import { IItemResponse } from '../../../src/interfaces/IItemResponse';
import { IItemDescriptionResponse } from '../../../src/interfaces/IItemDescriptionResponse';

// CONSTANTS
import { SIGNATURE_AUTHOR } from '../../../src/constants/author-signature';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const itemRes: IItemResponse = (await fetch(
      `${MeliEndPoints.ITEM_DATA}/${req.query.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => res.json())) as IItemResponse;

    const itemDescriptionRes: IItemDescriptionResponse = (await fetch(
      `${MeliEndPoints.ITEM_DATA}/${req.query.id}/description`,
      {
        method: 'GET',

        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => res.json())) as IItemDescriptionResponse;

    const categories: ICategory[] = await getCategoriesPathFromRoot(
      itemRes.category_id
    );

    const data: IInternalItemResponse = await processResponse(
      itemRes,
      itemDescriptionRes,
      categories
    );

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error Response');
  }
}

async function processResponse(
  itemData: IItemResponse,
  itemDescriptionRes: IItemDescriptionResponse,
  categories: ICategory[]
) {
  return {
    author: SIGNATURE_AUTHOR,
    item: {
      id: itemData.id,
      condition: itemData.condition,
      description: itemDescriptionRes.plain_text,
      free_shipping: itemData.shipping.free_shipping,
      picture: itemData.pictures[0].secure_url,
      price: {
        currency: itemData.currency_id,
        amount: itemData.price,
        decimals: 0,
      },
      sold_quantity: itemData.sold_quantity,
      title: itemData.title,
      path_from_root: categories,
    },
  };
}

async function getCategoriesPathFromRoot(categoryId: string) {
  // RETO CUATRO DIGITE SU CODIGO AQUI
}
