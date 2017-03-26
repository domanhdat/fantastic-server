"use strict";

exports.register = function *(next) {

    try {

        const registerService = this.registerService;

        let credential = {
            email: this.request.body.email,
            password: this.request.body.password
        };

        yield registerService.register(credential);

        this.body = {
            "code": "REGISTER_SERVICE_SUCCESS",
            "message": "register success"
        }
    } catch (error) {
        this.status = error.status || 500;
        this.body = {
            code: 'REGISTER_ERROR',
            message: error.message
        };
        this.app.emit('error', error, this);
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
        console.log ( error );
        yield next;
    }
};