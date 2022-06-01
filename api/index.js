const app = require('express')();
const fs = require('fs');
const PORT = 3030;

const getContentFromFile = async(fileName) => {
    const filePath = `./storage/${fileName}`;
    if(fs.existsSync(filePath)) {
        const mdFile = fs.readFileSync(filePath);
        return mdFile.toString();
    }
    return "";
};

const formatSinglePost = async(post) => {
    const content = await getContentFromFile(post.file);
    const entry = {
        'id' : post.id,
        'title' : post.title,
        'author' : post.author,
        'timestamp' : post.timestamp,
        'views' : post.views,
        'content' : content
    };
    return entry;
}

const formatPosts = async(postsMap) => {
    const stack = []; // Result stack

    postsMap = postsMap.slice(0).reverse();
    const mapFn = postsMap.map( async(post) => {
        const entry = await formatSinglePost(post);
        stack.push(entry);
    });
    
    await Promise.all(mapFn);
    return(stack);
};

app.get('/posts/:start', async(req, res) => {

    let i = req.params.start; // Beginning index 
    let j = req.query.limit;  // Limit

    const table = fs.readFileSync('./storage/table.json');
    const tableMap = JSON.parse(table);
    
    if(i < 0 || i > j)
        i = 0;

    if(j > tableMap.length)
        j = tableMap.length;
    
    let posts = tableMap.slice(i, j); 
    posts = await formatPosts(posts);

    if(posts.length > 0)
        res.status(200).send(posts);
    else
        res.status(200).send([]);
});

app.get('/post/:postId', async(req, res) => {
    let id = req.params.postId;
    
    if(id < 0)
        id = 0;

    const table = fs.readFileSync('./storage/table.json');
    const posts = JSON.parse(table); 

    if(posts.length >= id) {
        let post = posts[id];
        const entry = await formatSinglePost(post);
        res.status(200).send(entry);
    } else {
        res.status([]);
    }
});

app.listen(PORT, () => {
    console.log('Listening...');
});