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

        let identity = lodash.find(credential.identities, {'type': 'email', 'email': credential['email']});

        /**
         * compare password failed
         */
        if ( ! (this.hasher.compare(credential['textPassword'], identity['hashedPassword']))) {
            throw new Error('Password is incorrect');
        }

        yield this.credentialRepository.updateWithNewToken(credentialFounded, token);

        return {generatedToken: token};
    }
}


module.exports = EmailAuthenticationStrategy;