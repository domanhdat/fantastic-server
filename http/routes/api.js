const router     = require('koa-router')();
const controller = require('./../controller');
const middleware = require('./../middleware');


// Authenticate
router.post('/signin/email', middleware.credentialExistedRequire, controller.authController.signInByEmailAddress);

// register
router.post('/sign-up', middleware.credentialNotExistedRequire, middleware.credentialProvider, controller.registerController.register);

// router.get('/signup/validate/:secret', controller.registerController.active);

// article
router.get('/article/:id', controller.articleController.getArticleByArticleId);
router.post('/article', middleware.articleMiddleware.createArticleValidate, controller.articleController.saveArticle);

// user
router.get('/test', function *() {
    yield this.profileRepo.save({username: 'dat', password: 123456});
    this.body = yield this.profileRepo.findAll();
});


/**
 * GET PROFILE
 */
router.get('/profile/:id', controller.profileController.getProfile);

/**
 * UPDATE PROFILE
 */
router.put('/profile/:id', controller.profileController.updateProfile);


module.exports = router;
