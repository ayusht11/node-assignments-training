const babel = require("babel-core");
const express = require('express');
const app = module.exports = express();

const Clients = require('./getClients.js'); 
const ClientInfo = require('./getClientInfo.js');
const ClientLists = require('./getClientLists.js');
const Create = require('./createClient.js');
const Delete = require('./deleteClient.js');
const Port = require('./listenPort.js'); 

Clients.getClients();
ClientInfo.getClientInfo();
ClientLists.getClientLists();
Create.createClient();
Delete.deleteClient();

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

Port.startServer();
