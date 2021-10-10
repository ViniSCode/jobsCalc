const express = require("express");
const server = express();
const routes = require("./routes")
const path = require("path");

server.use(express.static("public"))

server.set('view engine', 'ejs');

// Dizendo para o server a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

//  usar o req.body
server.use(express.urlencoded({ extended: true }));

server.use(routes);

server.listen(3000, () => { console.log('rodando') })

