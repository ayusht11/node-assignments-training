const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
let jsonParser = bodyParser.json();

app.get('/clients', function (req, res) {
  request('https://api.createsend.com/api/v3.1/clients.json', function (err, response, data) {
    if(err) {
      res.send(err);
    }
    res.json(data); 
  })
   .auth('fc96dc9ded698bbfbfb975409a864a42', 'ayusht11', false);
});

app.get('/clients/:clientid', function (req, res) {
  request('https://api.createsend.com/api/v3.1/clients/'+req.params.clientid+'.json', function (err, response, data) {
    if(err) {
      res.send(err);
    }
    res.json(data); 
  })
   .auth('fc96dc9ded698bbfbfb975409a864a42', 'ayusht11', false);
});

app.get('/clients/:clientid/lists', function (req, res) {
  request('https://api.createsend.com/api/v3.1/clients/'+req.params.clientid+'/lists.json', function (err, response, data) {
    if(err) {
      res.send(err);
    }
    res.json(data); 
  })
   .auth('fc96dc9ded698bbfbfb975409a864a42', 'ayusht11', false);
});

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

app.delete('/clients/:client', function (req, res) {
  request({
    url: 'https://api.createsend.com/api/v3.1/clients/'+req.params.client+'.json',
    method: "DELETE",
    },
    function (err, response, data) {
      if(err)
        {res.send(err);}
      res.json(data);
    })
     .auth('fc96dc9ded698bbfbfb975409a864a42', 'ayusht11', false);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
