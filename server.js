const express = require('express');
var compression = require('compression');
var proxy = require('http-proxy-middleware');
var API_HOST = process.env.API_HOST || 'localhost:8080';
var PORT = process.env.PORT || 8080;
const path = require('path');

// Initialize
const app = express();

app.use(express.static(__dirname + '/dist'));

// Enable gzip response compression
app.use(compression());

// Enable proxy to api
app.use('/api', proxy({
  target: API_HOST,
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  }
}));

app.listen(PORT);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/good-deeds-front/index.html'));
});
