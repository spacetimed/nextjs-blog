import { getAllPostParams, getPostData } from "../../utils/fetchPosts";
import Layout from "../../components/layout";
import styles from '../../styles/viewpost.module.css';

export async function getStaticPaths() {
    const paths = await getAllPostParams();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps( {params} ) {
    const postId = params.id;
    const postObj = await getPostData(postId);
    return {
        props: {
            postObj,
        },
    };
}

export default function Post( {postObj} ) {
    console.table(postObj);
    return(
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>{postObj.title}</h1>
                <h3 className={styles.author}>by <u>{postObj.author}</u></h3>
                <p>{postObj.content}</p>
            </div>
        </Layout>
    );
}