var router = require('koa-router')();

router.get('/', function *(next) {
    yield this.render("index.nj.html", {name: "ngoc"});
});

module.exports = router;
