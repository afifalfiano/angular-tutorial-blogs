
const path = require('path');
const express = require('express');
const expressStaticGzip = require('express-static-gzip');

const serverPort = 7000;
const server = express();

server.use("/", expressStaticGzip(path.join(__dirname + '/dist/angular-tutorial-blogs'), {
    enableBrotli: true
}));

server.get(/.*/, function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production')
        res.redirect('https://' + req.hostname + req.url);
    else
        res.sendFile(__dirname + '/dist/angular-tutorial-blogs/index.html');
});

server.listen(process.env.PORT || serverPort, function () {
    console.log('Listened server on Port:%d', process.env.PORT || serverPort);
});
