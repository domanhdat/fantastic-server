"use strict";

const config          = require('./config');
const nunjuckProvider = require('./shared/nunjuck.provider');
const mongodbProvider = require('./shared/mongodb.provider');
const errorProvider   = require('./shared/error.provider');

// service
const ProfileServiceProvider = require('./fanstatic/profile/profile.service-provider');

module.exports = (app) => {
    app.context.config = config;
    app.use(nunjuckProvider);
    app.use(mongodbProvider(config.database.mongodb));
    app.use(errorProvider);
    app.use(ProfileServiceProvider);
    
    return app;
};