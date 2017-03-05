const router     = require('koa-router')();
const controller = require('./../controller');
const middleware = require('./../middleware');


// Authenticate
router.post('/sign-in/email', middleware.loginEmailFormValidate, middleware.credentialExistedRequire, controller.authController.signInByEmailAddress);

// register
router.post('/sign-up', middleware.credentialNotExistedRequire, middleware.credentialProvider, controller.registerController.register);

// active account
router.post('/sign-up/active', middleware.verifySecretKey, controller.registerController.active);

// article
router.get('/article/:id', controller.articleController.getArticleByArticleId);
router.post('/article', middleware.articleMiddleware.createArticleValidate, controller.articleController.saveArticle);
//router.put('/article', middleware.articleMiddleware.updateArticleValidate, controller.articleController.updateArticle);
//router.delete('/article/:id', middleware.articleMiddleware.deleteArticleValidate, controller.articleController.deleteArticle);

// upload
router.get('/upload', middleware.uploadMiddleware.createUploadUrlValidate, controller.uploadController.getUploadUrl);

/*
 * GET PROFILE
 */
router.get('/profile/:id', controller.profileController.getProfile);

/*
 * UPDATE PROFILE
 */
router.put('/profile/:id', controller.profileController.updateProfile);


module.exports = router;
