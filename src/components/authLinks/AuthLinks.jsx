import Link from 'next/link';
import styles from './AuthLinks.module.scss';

const AuthLinks = () => {
  const status = 'unauthenticated';

  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
