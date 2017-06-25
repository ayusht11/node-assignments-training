const request = require('request');
const app = require('./app.js');

module.exports.getClients = () => { 
  app.get('/clients', (req, res) => {
    request('https://api.createsend.com/api/v3.1/clients.json', (err, response, data) => {
      if(err) {
        return res.status(400).send({url: req.originalUrl + ' Bad Request', error : err});
      } 
      res.status(200).json(data);
    })
     .auth(req.header('username'),req.header('password'), false);
  });
}
