"use strict";

const mongo = require('koa-mongo');

module.exports = (config) => {
    console.log(config);
    return mongo(config)
};
