"use strict";

const config = {
    database: {
        mongodb: {
            host: process.env['DB_HOST'],
            port: process.env['DB_PORT'],
            db  : process.env['DB_NAME']
        }
    }
};

module.exports = config;