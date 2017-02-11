const error = require('koa-error');

module.exports = error({
    engine  : 'nunjucks',
    template: __dirname + '/../views/error.nj.html'
});