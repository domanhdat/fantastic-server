"use strict";

const lodash = require('lodash');

class RegisterService {

    constructor (credentialRepository, hasher) {
        this.credentialRepository = credentialRepository;
        this.hasher = hasher;
    }

    *register(emailCredential) {

        let identity = {
            email: emailCredential.email,
            password: yield this.hasher.hash(emailCredential.password),
            type: emailCredential.type
        };

        let credential = {
            identities: []
        };
        credential.identities.push(identity);
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