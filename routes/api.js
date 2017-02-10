var router = require('koa-router')();

router.get('/', function *(next) {
  this.body = {
      app: "fantastic api",
      version: "1.0.0"
  };
});

module.exports = router;
