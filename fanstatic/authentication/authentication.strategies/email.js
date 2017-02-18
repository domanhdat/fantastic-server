"use strict";

const bcrypt = require("bcryptjs");
const rantoken = require("rand-token").suid;
const lodash = require("lodash");
const config = require("config");

/**
 * bcrypt wrapper
 * @param password
 * @param hash
 * @return {Promise}
 */
let bcryptCompare = (password, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, function (error, result) {
            if (error) reject(error);
            resolve(result);
        })
    })
};


class EmailAuthenticationStrategy {

    constructor(credentialRepository) {
        this.credentialRepository = credentialRepository;
        this.name = "Email";
    }

    /**
     *
     * @param credential
     * @return {*}
     */
    *authenticate(credential) {

        const credentialFounded = yield this.credentialRepository.findByEmail(credential['email']);

        /**
         * not found credential
         */
        if ( ! credentialFounded) {
            return false;
        }

        let identity = lodash.find(credentialFounded.identities, ['email', credential['email']]);

        /**
         * compare password failed
         */
        if ( ! (yield bcryptCompare(credential['textPassword'], identity['hashedPassword']))) {
            throw new Error('Password is incorrect');
        }

        let token = rantoken( config.authentication.tokenLength || 16);

        yield this.credentialRepository.updateWithNewToken(credentialFounded, token);

        return {generatedToken: token};
    }
}


module.exports = EmailAuthenticationStrategy;