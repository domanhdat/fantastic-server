"use strict";

exports.signInByEmailAddress = function *(next) {
    try {
        const authenticateProvider      = this.authenticateStrategyProvider;
        const emailAuthenticateStrategy = authenticateProvider.provide("Email");

        return yield emailAuthenticateStrategy.authenticate(this.request.credential);
    } catch (error) {
        yield next
    }
};