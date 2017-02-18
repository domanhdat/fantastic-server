"use strict";

const config            = require('./config');
const nunjuckProvider   = require('./shared/nunjuck.provider');
const mongodbProvider   = require('./shared/mongodb.provider');
const s3ServiceProvider = require('./shared/s3-service.provider');

// service
const ArticleServiceProvider = require('./fanstatic/article/article.service-provider');
const ProfileServiceProvider = require('./fanstatic/profile/profile.service-provider');

module.exports = (app) => {
    app.context.config = config;
    app.use(nunjuckProvider);
    app.use(mongodbProvider(config.database.mongodb));
    app.use(s3ServiceProvider);
    app.use(ArticleServiceProvider);
    app.use(ProfileServiceProvider);
    
    return app;
};