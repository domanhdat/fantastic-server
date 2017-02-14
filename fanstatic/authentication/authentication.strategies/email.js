"use strict";

const bcrypt = require("bcryptjs");
const rantoken = require("rand-token").suid;

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
    }

    authenticate(credential) {
        let credentialFounded = this.credentialRepository.findByEmail(credential.identity.email);

        /**
         * compare password success
         * generate new token and store to db
         */
        if (yield bcryptCompare(credential.identity.password, credentialFounded.identity.password)) {
            // rantoken( || 16)
        };
    }
}


export default EmailAuthenticationStrategy;