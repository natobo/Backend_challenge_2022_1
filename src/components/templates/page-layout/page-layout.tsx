import React from 'react';
import { Header } from '../../organisms/header/header';

import styles from './page-layout.module.scss';

export const PageLayout = ({ children }) => (
  <>
    <Header />
    <main className={styles.main}>
      <div className={styles.main__wrapper}>{children}</div>
    </main>
  </>
);
