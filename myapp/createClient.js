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
        res.status(400).send('Bad Request!');
        return res.send(err);
      }
      res.status(201).json(data);
    })
     .auth('fc96dc9ded698bbfbfb975409a864a42', 'ayusht11', true);
  });
}
