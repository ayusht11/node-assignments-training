const request = require('request');
const app = require('./app.js');

const listenPort = function () { 
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  });
}

module.exports = listenPort;
