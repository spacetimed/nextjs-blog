const app = require('express')();
const fs = require('fs');
const { title } = require('process');
const PORT = 3030;

const getContentFromFile = async(fileName) => {
    const mdFile = fs.readFileSync(`./storage/${fileName}`);
    return mdFile.toString();
};

const formatPosts = async(postsJson) => {
    const formatted = [];
    postsJson.map( async({id, title, author, timestamp, views, file}) => {
        const content = await getContentFromFile(file);
        const entry = {
            'id' : id,
            'title' : title,
            'author' : author,
            'content' : content
        };
        formatted.push(entry);
    });
    return formatted;
};


// /api/posts/0?limit=10
app.get('/posts/:start', async(req, res) => {

    const i = req.params.start;
    let j = req.query.limit;

    const table = fs.readFileSync('./storage/table.json');
    const tableMap = JSON.parse(table);
    
    if(j > tableMap.length)
        j = tableMap.length;
    
    const posts = tableMap.slice(i, j); 

    if(posts.length > 0)
        res.status(200).send(posts);
    else
        res.status(200).send({'error' : 400})
});

app.get('/post/:postId', (req, res) => {
    const table = fs.readFileSync('./storage/table.json');
    const posts = JSON.parse(table); 
    if(posts.length >= req.params.postId)
        res.status(200).send(posts[req.params.postId]);
    else
        res.status(404);
});

app.listen(PORT, () => {
    console.log('API listening...');
});