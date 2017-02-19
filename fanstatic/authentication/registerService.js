"use strict";

const lodash = require('lodash');

class RegisterService {

    constructor (credentialRepository, hasher) {
        this.credentialRepository = credentialRepository;
        this.hasher = hasher;
    }

    *register(credential) {
        let identity = lodash.find(credential.identities, ['type', 'email']);

        identity.hashedPassword = yield this.hasher.hash(identity.password);

        console.log ( identity );


        return yield this.credentialRepository.insert(credential);
    }
}

module.exports = RegisterService;