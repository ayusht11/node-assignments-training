const request = require('request');
const app = require('./app.js');

module.exports.getClientInfo = () => { 
  app.get('/clients/:clientid', (req, res) => {
    request(`https://api.createsend.com/api/v3.1/clients/${req.params.clientid}.json`, 
      (err, response, data) => {
        if(err) {          
          return res.status(400).send({id: `${req.params.clientid} bad request`});
        }
        res.status(200).json(data); 
      }
    )
     .auth(req.header('username'),req.header('password'), false);
  });
}
