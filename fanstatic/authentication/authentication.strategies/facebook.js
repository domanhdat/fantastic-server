"use strict";

class FacebookAuthenticateStrategy {

    constructor (credentialRepository) {
        this.credentialRepository = credentialRepository;
    }

    *authenticate() {

    }
}

module.exports = FacebookAuthenticateStrategy;