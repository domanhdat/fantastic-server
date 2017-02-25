"use strict";

exports.signInByEmailAddress = function *(next) {
    try {
        const authenticateProvider      = this.authenticateStrategyProvider;
        const emailAuthenticateStrategy = authenticateProvider.provide("Email");

        const credential = {
            email:  this.request.body['email'],
            password: this.request.body['password']
        };

        let result =  yield emailAuthenticateStrategy.authenticate(credential);

        if ( ! result) {
            this.status = 403;
            return this.body = {
                "code": "AUTH_EMAIL_FAILED",
                "message": "Password incorrect"
            }
        }

        this.status = 200;
        this.body = {
            "code": "EMAIL_AUTH_SUCCESS",
            "token": result.token
        }

    } catch (error) {
        yield next
    }
};