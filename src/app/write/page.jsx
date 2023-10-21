'use client';

import Image from 'next/image';
import styles from './writePage.module.scss';
import { useState } from 'react';
import 'react-quill/dist/quill.bubble.css';
import ReactQuill from 'react-quill';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const WritePage = () => {
  const { status } = useSession();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const router = useRouter();

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === 'authenticated') router.push('/');

  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} placeholder="Title" />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="plus" width={16} height={16} />
        </button>

        {open && (
          <div className={styles.add}>
            <button className={styles['add-button']}>
              <Image src="/image.png" alt="plus" width={16} height={16} />
            </button>
            <button className={styles['add-button']}>
              <Image src="/external.png" alt="plus" width={16} height={16} />
            </button>
            <button className={styles['add-button']}>
              <Image src="/video.png" alt="plus" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles['text-area']}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
