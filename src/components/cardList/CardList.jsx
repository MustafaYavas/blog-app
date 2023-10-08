import React from 'react';

import styles from './CardList.module.scss';
import Pagination from '../pagination/Pagination';

const CardList = () => {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
};

export default CardList;
