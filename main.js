const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/a', function (req, res) {
    res.render('index');
});

app.all('*', function (req, res) {
    res.status(404).render('404');
});

app.listen(3000);