"use strict";

module.exports = function *( next ) {

    const credentialFounded = yield this.credentialRepository.findByEmail(this.request.body['email']);

    if ( ! credentialFounded) {
        return this.body = {
            "code": "AUTHENTICATE_ERROR",
            "message": "credential not existed"
        }
    }

    this.request.credential = credentialFounded;

    yield next;
};