"use strict";

exports.register = function *(next) {

    try {
        const registerService = this.registerService;
        yield registerService.register(this.request.credential);

        this.body = {
            "code": "REGISTER_SERVICE_SUCCESS",
            "message": "register success"
        }
    } catch (error) {
        yield next(error)
    }
};

exports.active = function *( next ) {
    try {
        const registerService = this.registerService;
        yield registerService.active(this.request.body.secret);

        this.body = {
            code: "REGISTER_SERVICE_SUCCESS",
            message: "active success"
        }

    } catch (error) {
        yield next(error);
    }
};