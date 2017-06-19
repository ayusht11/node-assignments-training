const express = require('express');
const app = module.exports = express();

const getClients = require('./getClients.js'); 
const getClientInfo = require('./getClientInfo.js');
const getClientLists = require('./getClientLists.js');
const createClient = require('./createClient.js');
const deleteClient = require('./deleteClient.js');
const listenPort = require('./listenPort.js'); 

getClients();
getClientInfo();
getClientLists();
createClient();
deleteClient();
listenPort();
