import React from 'react';

import styles from './CategoryList.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('failed');
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => {
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
            key={item._id}
          >
            {item.image && (
              <Image
                src={item.img}
                alt="style"
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>;
        })}
      </div>
    </div>
  );
};

export default CategoryList;
