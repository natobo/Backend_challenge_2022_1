import React from 'react';
import { IItem } from '../../../interfaces/IInternalSearchResponse';
import { ItemCard } from '../../molecules/item-card/item-card';

import styles from './ui-search-result.module.scss';

type Props = {
  items: IItem[];
};
export const UISearchResult = ({ items }: Props) => (
  <div className={styles['ui-search']}>
    {items?.map((item) => (
      <ItemCard key={item.id} item={item} />
    ))}
  </div>
);
