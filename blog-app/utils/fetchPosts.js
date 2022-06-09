import markdownToHtml from '../utils/markdownToHtml';
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
    const data = await res.json();
    return data;
}

async function cleanContent(content) {
    const maxLength = 100;
    let clean = await markdownToHtml(content);
    clean = clean.replace(/<[^>]*>?/gm, '');
    return clean.substring(0, maxLength) + '...';
}

async function formatPost(post) {
    const entry = {
        'id' : post.id,
        'title' : post.title,
        'author' : post.author,
        'timestamp' : post.timestamp,
        'views' : post.views,
        'content' : await cleanContent(post.content), 
    };
    return entry;
}

// Used by 'getStaticProps' in 'index.js'
export async function getFrontFeed(start, limit) {
    let feed = await getPostsJson(start, limit);

    if(feed == undefined || feed.length <= 0)
        return([]);

    const stack = [];
    const mapFn = feed.map( async(post) => {
        const entry = await formatPost(post);
        stack.push(entry);
    });
    
    await Promise.all(mapFn);
    return(stack);
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