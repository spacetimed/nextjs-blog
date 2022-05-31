const API = 'http://127.0.0.1:3030';

export async function getPostsJson(start, limit) {
    const res = await fetch(`${API}/posts/${start}?limit=${limit}`);
    const data = await res.json();
    return data;
}

export async function getPostJson(id) {
    const res = await fetch(`${API}/post/${id}`);
    console.log(`${API}/post/${id}`);
    const data = await res.json();
    return data;
}

export async function getFrontFeed(start, limit) {
    let feed = await getPostsJson(start, limit);
    /*
    payload data structure:
    {
        'id' : id,
        'title' : title,
        'author' : author,
        'timestamp' : timestamp,
        'views' : views,
        'content' : content
    }
    */
    const maxContentSize = 120;
    return feed.map( ({id, title, author, timestamp, views, content}) => {
        return {
            id: id,
            title: title,
            author: author,
            timestamp: timestamp,
            views: views,
            content: content.substring(0, maxContentSize) + "...",
        }
    });
}

export async function getAllPostParams() {
    const MAX = 1000;
    const posts = await getPostsJson(0, MAX);
    return posts.map((post) => {
        return {
            params: {
                id: post.id.toString(),
            },
        };
    });
}

export async function getPostData(id) {
    let post = await getPostJson(id);
    return {
        id: post.id,
        title: post.title,
        author: post.author,
        timestamp: post.timestamp,
        views: post.views,
        content: post.content,
    }
}