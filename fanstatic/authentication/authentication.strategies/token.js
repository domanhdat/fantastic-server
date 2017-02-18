"use strict";

class TokenAuthenticateStrategy {

    /**
     *
     * @param credentialRepository
     */
    constructor (credentialRepository) {
        this.credentialRepository = credentialRepository;
        this.name = "token";
    }

    /**
     *
     * @param credential
     * @return {*}
     */
    *authenticate(credential) {
        return yield this.credentialRepository.findByToken(credential.token);
    }
}

module.exports = TokenAuthenticateStrategy;