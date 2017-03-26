"use strict";

module.exports = function *( next ) {

    const email = this.request.body.email;

    if (yield this.credentialRepository.existedWithEmail(email)) {
        this.status = 400;
        return this.body = {
            "code": "CREDENTIAL_VALIDATE_ERROR",
            "message": "email is existed"
        }
    }

    yield next;
};