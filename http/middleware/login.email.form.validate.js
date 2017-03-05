"use strict";

module.exports = function *(next) {

    const config = this.config;

    this.checkBody ('email').notEmpty().isEmail() ;
    this.checkBody('password').notEmpty().len(config.authentication.passwordLength.min, config.authentication.passwordLength.max).md5();

    if (this.errors) {
        this.status = 400;
        this.body = this.errors;
        return this.body = {
            "code": "AUTHENTICATE_ERROR",
            "message": this.errors
        }
    }

    yield next;
};