const request = require('request');
const app = require('./app.js');

module.exports.getClientInfo = () => { 
  app.get('/clients/:clientid', (req, res) => {
    request('https://api.createsend.com/api/v3.1/clients/${req.params.clientid}.json', 
      (err, response, data) => {
        if(err) {
          res.status(400).send('Bad Request!');
          return res.send(err);
        }
        res.status(200).json(data); 
      }
    )
     .auth('fc96dc9ded698bbfbfb975409a864a42', 'ayusht11', false);
  });
}
