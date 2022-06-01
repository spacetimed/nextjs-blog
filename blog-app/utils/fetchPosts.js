const API = 'http://127.0.0.1:3030';


// Fetch an array of all post objects between ID's 'start' and 'start+limit'
export async function getPostsJson(start, limit) {
    const res = await fetch(`${API}/posts/${start}?limit=${limit}`)
    .catch( function(error) {
        return({});
    });
    if(res.ok) {
        const data = await res.json();
        return data;
    }
}


// Fetch a singular post object
export async function getPostJson(id) {
    const res = await fetch(`${API}/post/${id}`)
    .catch( function(error) {
        return({});
    });
    console.log(`${API}/post/${id}`);
    const data = await res.json();
    return data;
}

// Used by 'getStaticProps' in 'index.js'
export async function getFrontFeed(start, limit) {
    let feed = await getPostsJson(start, limit);

    if(feed == undefined || feed.length <= 0)
        return([]);

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

// Used by 'getStaticPaths' in '[id].js'
export async function getAllPostParams() {
    const MAX = 100;
    const posts = await getPostsJson(0, MAX);
    
    if(posts == undefined || posts.length <= 0)
        return [{ 
            params: { 
                id: '-1', 
            }, 
        }]; 
    
    return posts.map( (post) => {
        return {
            params: {
                id: post.id.toString(),
            },
        };
    });
}

// Used by 'getStaticProps' in '[id].js'
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