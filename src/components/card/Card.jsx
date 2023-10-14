import React from 'react';
import styles from './card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles['image-container']}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles['text-container']}>
        <div className={styles.detail}>
          <span className={styles.date}>11.10.2023</span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          excepturi deserunt consectetur amet eius ab perspiciatis. Omnis quam
          hic assumenda?
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
