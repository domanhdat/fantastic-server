var router = require('koa-router')();

router.get('/', function *(next) {
    this.body = {
        app    : "fantastic api",
        version: "1.0.0"
    };
});

router.get('/test', function *() {
    yield this.userRepo.save({username: 'dat', password: 123456});
    this.body = yield this.userRepo.findAll();
});

module.exports = router;
