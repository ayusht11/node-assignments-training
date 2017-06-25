const request = require('request');
const app = require('./app.js');

module.exports.deleteClient = () => { 
  app.delete('/clients/:clientid', (req, res) => {
    request({
      url: 'https://api.createsend.com/api/v3.1/clients/${req.params.clientid}.json',
      method: "DELETE",
    },
    (err, response, data) => {
      if(err) {        
        return res.status(400).send({url: req.originalUrl + ' Bad Request', error : err});
      }
      res.status(204).json(data);
    })
     .auth(req.header('username'),req.header('password'), false);
  });
}
