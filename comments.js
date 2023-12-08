// create web server

// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments/2
// http://localhost:3000/comments/3
// http://localhost:3000/comments/4

const express = require('express');
const app = express();
const port = 3000;

// create a route for GET request
app.get('/comments', (req, res) => {
    res.send('GET request to the homepage');
});

app.post('/comments', (req, res) => {
    res.send('POST request to the homepage');
});

// http://localhost:3000/comments/1
app.get('/comments/:id', (req, res) => {
    res.send('GET request to the homepage');
});

// http://localhost:3000/comments/1
app.put('/comments/:id', (req, res) => {
    res.send('PUT request to the homepage');
});

// http://localhost:3000/comments/1
app.delete('/comments/:id', (req, res) => {
    res.send('DELETE request to the homepage');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))