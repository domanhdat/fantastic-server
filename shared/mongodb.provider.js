"use strict";

const mongo = require('koa-mongo');

module.exports = (config) => {
    return mongo(config)
};
