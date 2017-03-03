"use strict";

const lodash = require('lodash');

class RegisterService {

    constructor (credentialRepository, hasher) {
        this.credentialRepository = credentialRepository;
        this.hasher = hasher;
    }

    *register(credential) {

        //@TODO optimize
        // hash text password
        credential.identities[0].password = yield this.hasher.hash(credential.identities[0].password);
        credential.secret = this.hasher.generateRandomKey();
        return yield this.credentialRepository.insert(credential);
    }

    *verifySecretKey(secret) {
        if (!secret) return false;
        return yield this.credentialRepository.findBySecret(secret);
    }

    /**
     *
     * @param secret
     */
    *active(secret) {
        let credential = yield this.credentialRepository.findBySecret(secret);
        credential.active = true;

        yield this.credentialRepository.update(credential);
    }
}

module.exports = RegisterService;