import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout';

import styles from '../styles/frontpage.module.css'; 
import { getFrontFeed } from "../utils/fetchPosts";

// import AccessAlarm from '@mui/icons-material/AccessAlarm';

export async function getStaticProps() {
    const feed = await getFrontFeed(0, 2);
    return {
        props: { feed },
    };
}

const getLocalDate = (timestamp) => {
    const date = new Date(timestamp);
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    return(months[date.getMonth()] + " " + date.getDate());
};

export default function Home({ feed }) {
    return (
        <Layout>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                {feed.map( ({id, title, author, timestamp, views, content}) => (
                    <div className={styles.post}>
                        <Link href={`/posts/${id}`}><a><h1 className={styles.title}>{title}</h1></a></Link>
                        <h3 className={styles.author}>by <u>{author}</u> &#8226; {getLocalDate(timestamp)}</h3>
                        <p>{content}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
}