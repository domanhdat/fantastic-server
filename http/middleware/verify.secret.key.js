"use strict";

module.exports = function *( next ) {
    const secretKey = this.request.body.secret;
    const registerService = this.registerService;

    if ( ! secretKey) {
        this.status = 400;
        return this.body = {
            code: "REGISTER_SERVICE_ERROR",
            message: "secret key is required"
        }
    }

    if ( ! (yield registerService.verifySecretKey(secretKey))) {
        this.status = 401;
        return this.body = {
            code: "REGISTER_SERVICE_ERROR",
            message: "secret key is malformed"
        }
    }

    yield next;
};