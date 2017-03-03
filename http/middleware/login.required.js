"use strict";

module.exports = function *( next ) {

    const authenticateProvider      = this.authenticateStrategyProvider;
    const tokenAuthenticateStrategy = authenticateProvider.provide("Token");

    let token = this.request.body.token || this.request.params.token || this.request.query.token;


    if ( ! token) {
        this.status = 400;
        return this.body = {
            "code": "TOKEN_VERIFY_ERROR",
            "message": "token is required"
        }
    }

    this.request.credential = yield tokenAuthenticateStrategy.authenticate({token: token});

    yield next;
};