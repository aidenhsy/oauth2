import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const loginGoogleHandler = () => {
    router.push({
      pathname: 'https://accounts.google.com/o/oauth2/v2/auth',
      query: {
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        redirect_uri: 'http://localhost:3000/profile',
        response_type: 'token',
        scope: 'https://www.googleapis.com/auth/userinfo.profile',
      },
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>OAuth2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button style={{ height: 50, width: 200 }} onClick={loginGoogleHandler}>
          Login with Google
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
