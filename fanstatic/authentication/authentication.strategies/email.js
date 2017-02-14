"use strict";

const bcrypt = require("bcryptjs");
const rantoken = require("rand-token").suid;
const lodash = require("lodash");
const config = require("/config");

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

    *authenticate(credential) {
        let credentialFounded = this.credentialRepository.findByEmail(credential.email);

        /**
         * not found credential
         */
        if ( ! credentialFounded) {
            return false;
        }

        lodash.filter(credentialFounded.identities, {"email": credential.email});


        /**
         * compare password fail
         */
        if ( ! (yield bcryptCompare(credential.identity.password, credentialFounded.identity.password))) {
            return false;
        }

        let token = rantoken( config.authentication.tokenLength || 16);


    }
}


export default EmailAuthenticationStrategy;