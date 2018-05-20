
const express = require('express');
const app = express();
const path = require('path');

const https = require('https');
const http = require('http');
const config = {"connectionOptions":{"httpPort": 8000, "httpsPort": 8443}};

app.use(express.static('./client'));

app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, "client",'index.html'));
});


http.createServer(app).listen(config.connectionOptions.httpPort);

console.info("App listening on port " + config.connectionOptions.httpPort + " and " + config.connectionOptions.httpsPort);
