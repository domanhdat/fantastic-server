require('dotenv').config();
const app     = require('koa')(),
      koa     = require('koa-router')(),
      logger  = require('koa-logger'),
      json    = require('koa-json'),
      onerror = require('koa-onerror'),
      web     = require('./http/routes/web'),
      api     = require('./http/routes/api'),
      boot    = require('./boot')
    ;

boot(app);

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function *(next) {
    const start = new Date;
    yield next;
    const ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
koa.use('/', web.routes(), web.allowedMethods());
koa.use('/api', api.routes(), api.allowedMethods());

// mount root routes  
app.use(koa.routes());

app.on('error', (err, ctx) => console.error('server error', err, ctx));

module.exports = app;
