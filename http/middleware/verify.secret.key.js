"use strict";

module.exports = function *( next ) {
    const secretKey = this.request.body.secret;
    const registerService = this.registerService;

    if ( ! secretKey) {
        this.body = {
            code: "REGISTER_SERVICE_ERROR",
            message: "secret key is required"
        }
    }

    if (! registerService.verifySecretKey(secretKey)) {
        this.body = {
            code: "REGISTER_SERVICE_ERROR",
            message: "secret key is malfom"
        }
    }

    yield next;
};