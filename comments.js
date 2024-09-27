//Create Web Server
const express = require('express');
const app = express();
const port = 3000;

//Create Web Server
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Start Web Server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
