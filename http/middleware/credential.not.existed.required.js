"use strict";

module.exports = function *( next ) {

    const email = this.request.body.email;

    let founded = yield this.credentialRepository.findByEmail(email);

    if (!!founded) {
        this.body = {
            "code": "CREDENTIAL_VALIDATE_ERROR",
            "message": "email is existed"
        }
    }

    yield next;

};