const app = require('express')();
const PORT = 3030;

app.get('/posts', (req, res) => {
    res.status(200).send({
        'test' : 'yeee'
    });
});

app.listen(PORT, () => {
    console.log('API listening...');
});