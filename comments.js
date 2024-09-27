//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'data/comments.json');
const comments = require('./data/comments.json');
const { v4: uuidv4 } = require('uuid');
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const newComment = req.body;
    newComment.id = uuidv4();
    comments.push(newComment);
    fs.writeFileSync(commentsPath, JSON.stringify(comments));
    res.json(newComment);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});