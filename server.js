const NodeCache = require("node-cache");
const AnyProxy = require('./anyproxy');
const cluster = require('cluster');
const WebSocket = require('ws');
const https = require('https');
const redis = require("redis");
const uuid = require('uuid');
const util = require('util');
const fs = require('fs');

const database = require('./database.js');
const database_init = database.database_init;
const Users = database.Users;
const Bots = database.Bots;
const sequelize = database.sequelize;