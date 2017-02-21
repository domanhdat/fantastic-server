"use strict";

module.exports = function *( next ) {

    const credentialFounded = yield this.credentialRepository.findByEmail(this.request.body['email']);

    if ( ! credentialFounded) {
        this.status = 400;
        return this.body = {
            "code": "AUTHENTICATE_ERROR",
            "message": "credential not existed"
        }
    }

    this.request.credential = credentialFounded;

    yield next;
};