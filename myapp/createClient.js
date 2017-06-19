const request = require('request');
const bodyParser = require('body-parser');
const app = require('./app.js');

let jsonParser = bodyParser.json();

createClient = function () { 
  app.post('/clients', jsonParser, function (req, res) {
    request({
      url: 'https://api.createsend.com/api/v3.1/clients.json',
      method: "POST",
      json: req.body
      },
      function (err, response, data) {
        if(err) {
          res.send(err);
        }
        res.json(data);
      })
       .auth('fc96dc9ded698bbfbfb975409a864a42', 'ayusht11', true);
  });
}

module.exports = createClient;
