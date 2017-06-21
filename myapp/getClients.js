const request = require('request');
const app = require('./app.js');

const getClients = function () { 
  app.get('/clients', function (req, res) {
    request('https://api.createsend.com/api/v3.1/clients.json', function (err, response, data) {
      if(err) {
        res.send(err);
        return(err);
      }
      res.json(data); 
    })
     .auth('fc96dc9ded698bbfbfb975409a864a42', 'ayusht11', false);
  });
}

module.exports = getClients;
