// main start point
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');

// app setup
// morgan and bodyParser are middleware
// morgan is used to log server events to server terminal
app.use(morgan('combined'));
// bodyParser parses incoming request into json
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on port:', port);
