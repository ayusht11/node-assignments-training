const express = require('express');
const request = require('request');

const app = express();
let clientid = "0cd31f40512c776fb6d89f98a3a672f8";
let requestData = {
                    "CompanyName": "umang",
                    "Country": "Australia",
                    "TimeZone": "(GMT+10:00) Canberra, Melbourne, Sydney"
                  };

app.get('/clients', function(req, res){
  request('https://api.createsend.com/api/v3.1/clients.json', function (err,response, data) {
    if(err)
      {res.send(err);}
    res.json(data); 
  })
   .auth('fc96dc9ded698bbfbfb975409a864a42', 'ayusht11', false);
});

app.get('/clients/:client', function(req, res){
  request('https://api.createsend.com/api/v3.1/clients/'+req.params.client+'.json', function (err, response, data) {
    if(err)
      {res.send(err);}
    res.json(data); 
  })
   .auth('fc96dc9ded698bbfbfb975409a864a42', 'ayusht11', false);
});

app.get('/clients/:client/lists', function(req, res){
  request('https://api.createsend.com/api/v3.1/clients/'+req.params.client+'/lists.json', function (err, response, data) {
    if(err)
      {res.send(err);}
    res.json(data); 
  })
   .auth('fc96dc9ded698bbfbfb975409a864a42', 'ayusht11', false);
});

app.post('/clients', function (req, res) {
  request({
    url: 'https://api.createsend.com/api/v3.1/clients.json',
    method: "POST",
    json: requestData
},  function (err, response, data) {
    if(err)
      {res.send(err);}
    res.json(data);
  })
   .auth('fc96dc9ded698bbfbfb975409a864a42', 'ayusht11', true);
});

app.delete('/clients/:client', function (req, res) {
  request({
    url: 'https://api.createsend.com/api/v3.1/clients/'+req.params.client+'.json',
    method: "DELETE",
},  function (err, response, data) {
    if(err)
      {res.send(err);}
    res.json(data);
  })
   .auth('fc96dc9ded698bbfbfb975409a864a42', 'ayusht11', false);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
