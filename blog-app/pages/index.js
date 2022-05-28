import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout';
import { getFrontFeed } from "../utils/fetchPosts";
import styles from '../styles/frontpage.module.css'; 

export async function getStaticProps() {
    const feed = getFrontFeed();
    return {
        props: {
            feed
        },
    };
}

export default function Home({ feed }) {
    return (
        <Layout>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {feed.map( ({id, title, author, content}) => (
                    <div className={styles.post}>
                        <Link href={`/posts/${id}`}><h1 className={styles.title}>{title}</h1></Link>
                        <h3 className={styles.author}>by <u>{author}</u></h3>
                        <p>{content}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
}