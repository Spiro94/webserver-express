const http = require('http');

http.createServer((req, res) => {

    res.writeContinue(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Daniel',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);


console.log('Escuchando por el puerto 8080');