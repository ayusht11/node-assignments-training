const request = require('request');
const app = require('./app.js');

module.exports.startServer = () => { 
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
  });
}
