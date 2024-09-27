//Create Web Server
const express = require('express');
const app = express();
const port = 3000;
//Create a new comment
app.post('/comments', (req, res) => {
    res.send('Create a new comment');
});
//Get all comments
app.get('/comments', (req, res) => {
    res.send('Get all comments');
});
//Get a comment by id
app.get('/comments/:id', (req, res) => {
    res.send('Get a comment by id');
});
//Update a comment by id
app.put('/comments/:id', (req, res) => {
    res.send('Update a comment by id');
});
//Delete a comment by id
app.delete('/comments/:id', (req, res) => {
    res.send('Delete a comment by id');
});
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
