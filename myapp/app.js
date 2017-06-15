const express = require('express');
const lodash = require('lodash');
const app = express();
const request = require('request');
const createsend = require('createsend-node');
const auth = { apiKey: '5d545faed3c6ea65bd690e97e6733c3e' };
const api = new createsend(auth);

app.get('/clients', function(req, res){
  request('https://api.createsend.com/api/v3.1/clients.json', api.getClients(function (err, clientList) {
    res.send("hello");
    
  }));
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
