"use strict";

const lodash = require("lodash");
const config = require("config");

class EmailAuthenticationStrategy {

    constructor(credentialRepository, hasher) {
        this.credentialRepository = credentialRepository;
        this.hasher = hasher;
        this.name = "Email";
    }

    /**
     *
     * @param credential
     * @return {*}
     */
    *authenticate(credential) {

        let credentialFounded = yield this.credentialRepository.findActiveByEmail(credential.email);

        let identity = lodash.find(credentialFounded.identities, { "type": "email", "email": credential.email});

        /**
         * compare password failed
         */
        if ( ! (yield this.hasher.compare(credential["password"], identity["password"]))) {

            return false;
        }

        let token = this.hasher.generateRandomKey(config.authentication.tokenLength);

        yield this.credentialRepository.updateWithNewToken(credentialFounded, token);

        return {token: token};
    }
}


module.exports = EmailAuthenticationStrategy;