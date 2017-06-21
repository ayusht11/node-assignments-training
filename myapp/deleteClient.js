const request = require('request');
const app = require('./app.js');

deleteClient = function () { 
  app.delete('/clients/:client', function (req, res) {
    request({
      url: 'https://api.createsend.com/api/v3.1/clients/'+req.params.client+'.json',
      method: "DELETE",
      },
      function (err, response, data) {
        if(err) {
          res.send(err);
          return(err);
        }
        res.json(data);
      })
       .auth('fc96dc9ded698bbfbfb975409a864a42', 'ayusht11', false);
  });
}

module.exports = deleteClient;
