import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import React from 'react';
import styles from './singlePage.module.scss';
import Comments from '@/components/comments/Comments';

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles['info-container']}>
        <div className={styles['text-container']}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles['user-image-container']}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles['user-text-container']}>
              <span className={styles.username}>username</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles['image-container']}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              ut ullam assumenda deleniti dolorem maiores id iusto eaque fugiat
              repudiandae. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Quaerat ut ullam assumenda deleniti dolorem maiores id iusto
              eaque fugiat repudiandae. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Quaerat ut ullam assumenda deleniti dolorem
              maiores id iusto eaque fugiat repudiandae.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              ut ullam assumenda deleniti dolorem maiores id iusto eaque fugiat
              repudiandae. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Quaerat ut ullam assumenda deleniti dolorem maiores id iusto
              eaque fugiat repudiandae. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Quaerat ut ullam assumenda deleniti dolorem
              maiores id iusto eaque fugiat repudiandae.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              ut ullam assumenda deleniti dolorem maiores id iusto eaque fugiat
              repudiandae. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Quaerat ut ullam assumenda deleniti dolorem maiores id iusto
              eaque fugiat repudiandae. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Quaerat ut ullam assumenda deleniti dolorem
              maiores id iusto eaque fugiat repudiandae.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              ut ullam assumenda deleniti dolorem maiores id iusto eaque fugiat
              repudiandae. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Quaerat ut ullam assumenda deleniti dolorem maiores id iusto
              eaque fugiat repudiandae. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Quaerat ut ullam assumenda deleniti dolorem
              maiores id iusto eaque fugiat repudiandae.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
