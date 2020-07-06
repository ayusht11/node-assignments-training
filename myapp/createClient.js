const request = require('request');
const bodyParser = require('body-parser');
const app = require('./app.js');

app.use(bodyParser.json());

module.exports.createClient = () => { 
  app.post('/clients', (req, res) => {
    request({
      url: 'https://api.createsend.com/api/v3.1/clients.json',
      method: "POST",
      json: req.body
    },
    (err, response, data) => {
      if(err) {
        return res.status(400).send({url: `${req.originalUrl} bad request`});
      }
      res.status(201).json(data);
    })
     .auth(req.header('username'),req.header('password'), false);
  });
}
