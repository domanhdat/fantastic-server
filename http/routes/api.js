const router     = require('koa-router')();
const controller = require('./../controller');
const middleware = require('./../middleware');

// article
router.get('/article/:id', controller.articleController.getArticleByArticleId);
router.post('/article', middleware.articleMiddleware.createArticleValidate, controller.articleController.saveArticle);
//router.put('/article', middleware.articleMiddleware.updateArticleValidate, controller.articleController.updateArticle);
//router.delete('/article/:id', middleware.articleMiddleware.deleteArticleValidate, controller.articleController.deleteArticle);

// upload
router.get('/upload', middleware.uploadMiddleware.createUploadUrlValidate, controller.uploadController.getUploadUrl);

// user
router.get('/test', function *() {
    yield this.profileRepo.save({username: 'dat', password: 123456});
    this.body = yield this.profileRepo.findAll();
});

module.exports = router;
