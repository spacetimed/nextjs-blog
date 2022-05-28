import { getAllPostParams, getPostData } from "../../utils/fetchPosts";
import Layout from "../../components/layout";
import Navigation from "../../components/navigation";

export async function getStaticPaths() {
    const paths = getAllPostParams();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps( {params} ) {
    const postId = params.id;
    return {
        props: {
            postId,
        },
    };
}

export default function Post( {postId} ) {
    return(
        <Layout>
        <div>Post id: {postId}</div>
        </Layout>
    );
}