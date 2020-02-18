var express = require('express');
var router = express.Router();

app.get('/posts', function (req, res) {
    res.send('Hello World!');
})

app.post('/list', function (req, res) {
    res.send('POST request to the homepage');
})
