"use strict";

const config          = require('./config');
const nunjuckProvider = require('./shared/nunjuck.provider');
const mongodbProvider = require('./shared/mongodb.provider');
const errorProvider   = require('./shared/error.provider');
const passport        = require('koa-passport');
const koaSession      = require('koa-session');
const bodyParser      = require('koa-bodyparser');

// service
const ArticleServiceProvider = require('./fanstatic/article/article.service-provider');
const ProfileServiceProvider = require('./fanstatic/profile/profile.service-provider');

module.exports = (app) => {
    app.context.config = config;
    app.use(bodyParser());
    app.use(nunjuckProvider);
    app.use(mongodbProvider(config.database.mongodb));
    app.use(errorProvider);
    app.use(ArticleServiceProvider);
    app.use(ProfileServiceProvider);
    app.use(koaSession(app));

    app.use(passport.initialize());
    app.use(passport.session());
    
    return app;
};