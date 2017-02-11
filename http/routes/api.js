const router     = require('koa-router')();
const controller = require('./../controller');
const middleware = require('./../middleware');

// article
router.get('/article/:id', controller.articleController.getArticleByArticleId);
router.post('/article', middleware.articleMiddleware.createArticleValidate, controller.articleController.saveArticle);

module.exports = router;
