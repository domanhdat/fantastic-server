"use strict";

const config          = require('./config');
const nunjuckProvider = require('./shared/nunjuck.provider');
const mongodbProvider = require('./shared/mongodb.provider');

// service
const UserServiceProvider = require('./fanstatic/user/user.service-provider');

module.exports = (app) => {
    app.context.config = config;
    app.use(nunjuckProvider);
    app.use(mongodbProvider(config.database.mongodb));
    app.use(UserServiceProvider);
    
    return app;
};