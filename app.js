require('dotenv').config();
require('app-module-path').addPath(__dirname);

const app         = require('koa')(),
      koa         = require('koa-router')(),
      logger      = require('koa-logger'),
      json        = require('koa-json'),
      onerror     = require('koa-onerror'),
      web         = require('./http/routes/web'),
      api         = require('./http/routes/api'),
      boot        = require('./boot'),
      KoaValidate = require('koa-validate'),
      KoaStatic   = require('koa-static'),
      cors        = require('koa-cors'),
      koaBody     = require('koa-body')
    ;
app.use(cors());
boot(app);
KoaValidate(app);
app.use(koaBody());
app.use(json());
app.use(logger());
app.use(KoaStatic(__dirname + '/public'));

// routes definition
koa.use('/', web.routes(), web.allowedMethods());
koa.use('/api', api.routes(), api.allowedMethods());

// mount root routes  
app.use(koa.routes());

module.exports = app;
