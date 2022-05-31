const API = 'http://127.0.0.1:3030/posts';

export async function getAllPostsJson() {
    const res = await fetch('');
    const data = await res.json();
    return data;
}

export async function getFrontFeed(lower, upper) {
    let frontFeedPosts = await getAllPostsJson();
    frontFeedPosts = frontFeedPosts.slice(0).reverse();
    const maxContentSize = 120;
    return frontFeedPosts.map( ({id, title, author, content}) => {
        return {
            id: id,
            title: title,
            author: author,
            content: content.substring(0, maxContentSize) + "...",
        }
    });
}

export function getAllPostParams() {
    const allPosts = getPostsJson();
    return allPosts.map(({ id, title }) => {
        return {
            params: {
                id: id,
            },
        };
    });
}

export function getPostData(_id) {
    
    // Just linear search for now due to no API integration yet

    const posts = getPostsJson();

    for(let i = 0; i < posts.length; i++)
    {
        const postObj = posts[i];
        if(postObj.id == _id) {
            return {
                id: postObj.id,
                title: postObj.title,
                author: postObj.author,
                content: postObj.content,
            }
        }
    }

    return {
        id: -1,
        title: "Post not found",
        author: "",
        content: ""
    };
}