"use strict";

const mongo  = require('koa-mongo');
const config = require('./../config');

module.exports = mongo(config.database.mongodb);
