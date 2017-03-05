"use strict";

module.exports = function *( next ) {

    if (yield this.credentialRepository.existedActiveWithEmail(this.request.body['email'])) {
        this.status = 400;
        return this.body = {
            "code": "AUTHENTICATE_ERROR",
            "message": "credential not existed"
        }
    }

    yield next;
};