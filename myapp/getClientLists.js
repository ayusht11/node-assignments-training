const request = require('request');
const app = require('./app.js');

getClientLists = function () { 
  app.get('/clients/:clientid/lists', function (req, res) {
    request('https://api.createsend.com/api/v3.1/clients/'+req.params.clientid+'/lists.json', function (err, response, data) {
      if(err) {
        res.send(err);
      }
      res.json(data); 
    })
     .auth('fc96dc9ded698bbfbfb975409a864a42', 'ayusht11', false);
  });
}

module.exports = getClientLists;
