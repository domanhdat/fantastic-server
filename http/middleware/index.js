"use strict";

module.exports = {
    articleMiddleware: require('./article.middleware'),
    uploadMiddleware : require('./upload.middleware'),
    credentialNotExistedRequire: require('./credential.not.existed.required'),
    credentialExistedRequire: require('./credential.existed.required'),
    credentialProvider: require('./credential.provider')
};