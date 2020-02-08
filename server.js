const express = require('express')
const app = express();

var hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Expresss HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Daniel',
    });
});

app.get('/about', function(req, res) {

    res.render('about', {
        nombre: 'Daniel',

    });
});

app.listen(port, () => {
    console.log("Escuchando por el puerto: ", port);
});