import { NextApiRequest, NextApiResponse } from 'next';

// INTERFACES
import {
  ISearchResponse,
  Result,
} from '../../../src/interfaces/ISearchResponse';
import * as MeliEndPoints from '../../../src/common/meli-endponts';
import {
  ICategory,
  IInternalSearchResponse,
  IItem,
} from '../../../src/interfaces/IInternalSearchResponse';
import { ICategoryResponse } from '../../../src/interfaces/ICategoryResponse';

// CONSTANTS
import { SIGNATURE_AUTHOR } from '../../../src/constants/author-signature';
import { ITEMS_LIMIT } from '../../../src/constants/pagination';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(
      MeliEndPoints.SEARCH_ITEMS,
      '?q=',
      req.query.q,
      '-limite: ',
      ITEMS_LIMIT
    );
    const data: IInternalSearchResponse = await fetch(
      `${MeliEndPoints.SEARCH_ITEMS}?q=${req.query.q}&limit=${ITEMS_LIMIT}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((res: ISearchResponse) => processResponse(res.results));

    res.status(200).json(data);
  } catch (error) {
    res.status(500).send('Server Error Response');
  }
}

type CategoryHistogram = {
  [key: string]: number;
};

type ItemsReduce = {
  items: IItem[];
  categoryHistogram: CategoryHistogram;
};

async function processResponse(searchResponseResults: Result[]) {
  console.log('searchResponseResults: ', searchResponseResults);
  const { items, categoryHistogram } = mapItems(searchResponseResults);

  const topCategory = pickTopCategory(categoryHistogram);
  const categories = await getCategoriesPathFromRoot(topCategory);

  return {
    author: SIGNATURE_AUTHOR,
    categories,
    items,
  };
}

function mapItems(items: Result[]): ItemsReduce {
  // RETO TRES DIGITE SU CODIGO AQUI
  let itemsReduce: ItemsReduce;
  return itemsReduce;
}

function pickTopCategory(categoryHistogram: CategoryHistogram) {
  return Object.keys(categoryHistogram).reduce((prev, current) => {
    if (!prev) {
      return current;
    }
    return categoryHistogram[prev] >= categoryHistogram[current]
      ? prev
      : current;
  });
}

async function getCategoriesPathFromRoot(categoryId: string) {
  const categoryPathRes: ICategoryResponse = (await fetch(
    `${MeliEndPoints.CATEGORIES}/${categoryId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json())) as ICategoryResponse;
  const pathFromRoot: ICategory[] = categoryPathRes.path_from_root.map(
    (category) => ({
      id: category.id,
      name: category.name,
    })
  );

  return pathFromRoot;
}
