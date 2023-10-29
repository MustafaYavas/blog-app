import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import React from 'react';
import styles from './singlePage.module.scss';
import Comments from '@/components/comments/Comments';

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('failed');
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles['info-container']}>
        <div className={styles['text-container']}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles['user-text-container']}>
                <Image
                  src={data.user.image}
                  alt=""
                  width={50}
                  height={50}
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles['user-text-container']}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>
                {data?.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles['image-container']}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
