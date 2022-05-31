const app = require('express')();
const fs = require('fs');
const PORT = 3030;
const errorRes = {'error' : 404};

const getContentFromFile = async(fileName) => {
    const mdFile = fs.readFileSync(`./storage/${fileName}`);
    return mdFile.toString();
};


const format = async(postsMap) => {
    const result = [];
    postsMap = postsMap.slice(0).reverse();
    postsMap.map( async({id, title, author, timestamp, views, file}) => {
        const content = await getContentFromFile(file);
        const entry = {
            'id' : id,
            'title' : title,
            'author' : author,
            'timestamp' : timestamp,
            'views' : views,
            'content' : content
        };
        result.push(entry);
    });
    return result;
};


app.get('/posts/:start', async(req, res) => {

    const i = req.params.start;
    let j = req.query.limit;

    const table = fs.readFileSync('./storage/table.json');
    const tableMap = JSON.parse(table);

    if(j > tableMap.length)
        j = tableMap.length;
    
    let posts = tableMap.slice(i, j); 
    posts = await format(posts);

    if(posts.length > 0)
        res.status(200).send(posts);
    else
        res.status(200).send(errorRes);
});


app.get('/post/:postId', async(req, res) => {
    const table = fs.readFileSync('./storage/table.json');
    const posts = JSON.parse(table); 
    if(posts.length >= req.params.postId) {
        let post = posts[req.params.postId];
        const content = await getContentFromFile(post.file);
        post = {
            'id' : post.id,
            'title' :  post.title,
            'author' : post.author,
            'timestamp' : post.timestamp,
            'views' : post.views,
            'content' : content
        }
        res.status(200).send(post);
    } else {
        res.status(errorRes);
    }
});


app.listen(PORT, () => {
    console.log('API listening...');
});