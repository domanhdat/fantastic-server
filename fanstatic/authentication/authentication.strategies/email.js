"use strict";

const bcrypt = require("bcryptjs");

class EmailAuthenticationStrategy {

    constructor(credentialRepository) {
        this.credentialRepository = credentialRepository;
    }

    authenticate(credential) {
        let credentialFounded = this.credentialRepository.findByEmail(credential.identity.email);
        bcrypt.bcryptCompare(credential.identity.password, credentialFounded.identity.password);

    }
}