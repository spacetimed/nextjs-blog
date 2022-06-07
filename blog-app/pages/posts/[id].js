import { getAllPostParams, getPostData } from "../../utils/fetchPosts";
import Layout from "../../components/layout";
import styles from '../../styles/viewpost.module.css';
import markdownToHtml from "../../utils/markdownToHtml";

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
    const postContent = await markdownToHtml(postObj.content);
    return {
        props: {
            postObj,
            postContent, 
        },
    };
}

export default function Post( {postObj, postContent} ) {
    return(
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>{postObj.title}</h1>
                <h3 className={styles.author}>by <u>{postObj.author}</u></h3>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: postContent }}></div>
            </div>
        </Layout>
    );
}