"use strict";

exports.signInByEmailAddress = function *(next) {
    const authenticateProvider      = this.authenticateStrategyProvider;
    const emailAuthenticateStrategy = authenticateProvider.provide("Email");

    // fake data
    const credential = {
        email: "tongoc92@gmail.com",
        textPassword: "tongoc123"
    };

    this.body = yield emailAuthenticateStrategy.authenticate(credential)

};