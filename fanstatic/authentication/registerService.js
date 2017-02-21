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
}

module.exports = RegisterService;