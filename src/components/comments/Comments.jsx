import React from 'react';
import styles from './Comments.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Comments = () => {
  const status = 'authenticated';
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              className={styles.image}
              width={50}
              height={50}
            />
            <div className={styles['user-info']}>
              <span className={styles.username}>username</span>
              <span className={styles.date}>11.10.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            totam architecto repellendus soluta a ex iste tempora natus itaque
            tempore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
