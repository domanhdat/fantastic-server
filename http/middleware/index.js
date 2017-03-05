"use strict";

module.exports = {
    articleMiddleware: require('./article.middleware'),
    uploadMiddleware : require('./upload.middleware'),
    credentialNotExistedRequire: require('./credential.not.existed.required'),
    credentialExistedRequire: require('./credential.existed.required'),
    credentialProvider: require('./credential.provider'),
    verifySecretKey: require('./verify.secret.key'),
    loginEmailFormValidate: require('./login.email.form.validate')
};