import Head from 'next/head';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

interface Props {
    children: React.ReactNode;
    title: string;
}

export const MainLayout = ({children, title}:Props) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>{title} -- Nahuel</title>
            <meta name="description" content={title} />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={styles.main}>
            {children}
          </main>
        </div>
      )
}
