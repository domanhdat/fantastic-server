"use strict";

module.exports = function *( next ) {

    const credentialFounded = yield this.credentialRepository.findActiveByEmail(this.request.body['email']);

    if ( ! credentialFounded) {
        this.status = 400;
        return this.body = {
            "code": "AUTHENTICATE_ERROR",
            "message": "credential not existed"
        }
    }

    yield next;
};