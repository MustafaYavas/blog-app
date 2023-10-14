import styles from './loginPage.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles['social-button']}>Sign in with Google</div>
        <div className={styles['social-button']}>Sign in with Github</div>
        <div className={styles['social-button']}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
