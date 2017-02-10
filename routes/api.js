var router = require('koa-router')();

router.get('/', function *(next) {
    this.body = {
      app: "fantastic api",
      version: "1.0.0"
    };
});

router.get('/test', function *() {

    this.body = yield this.mongo.collection('someCollection').find().toArray();
});

module.exports = router;
