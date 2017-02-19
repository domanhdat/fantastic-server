"use strict";

const s3ServiceProvider = require('./shared/s3-service.provider');
const config          = require('./config');
const nunjuckProvider = require('./shared/nunjuck.provider');
const mongodbProvider = require('./shared/mongodb.provider');
const errorProvider   = require('./shared/error.provider');
const hasher          = require('./shared/hasher.provider');
const bodyParser      = require('koa-bodyparser');


// service
const ArticleServiceProvider = require('./fanstatic/article/article.service-provider');
const ProfileServiceProvider = require('./fanstatic/profile/profile.service-provider');
const AuthenticationProvider = require('./fanstatic/authentication/authenticate.provider');

module.exports = (app) => {
    app.context.config = config;
    app.use(nunjuckProvider);
    app.use(mongodbProvider(config.database.mongodb));
    app.use(s3ServiceProvider);
    app.use(errorProvider);
    app.use(hasher);
    app.use(ArticleServiceProvider);
    app.use(ProfileServiceProvider);
    app.use(AuthenticationProvider);

    return app;
};