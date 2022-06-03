import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout';
import Banner from '../components/banner';
import Footer from '../components/footer';

import styles from '../styles/frontpage.module.css'; 
import { getFrontFeed } from "../utils/fetchPosts";

// import AccessAlarm from '@mui/icons-material/AccessAlarm';

export async function getStaticProps() {
    const feed = await getFrontFeed(0, 2);
    return {
        props: { feed },
    };
}

export default function Home({ feed }) {
    return (
        <Layout>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner />
            <div className={styles.frontpageContainer}>
                {feed.map( ({id, title, author, content}) => (
                    <div className={styles.post}>
                        <Link href={`/posts/${id}`}><a><h1 className={styles.title}>{title}</h1></a></Link>
                        <h3 className={styles.author}>by <u>{author}</u></h3>
                        <p>{content}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </Layout>
    );
}