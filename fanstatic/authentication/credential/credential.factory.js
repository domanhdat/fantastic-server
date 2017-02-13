"use strict";

const Credential = require('./credential');

class CredentialFactory {

    buildOneFromDb(rawData) {
        let credential = new Credential();

        return credential.tokens(rawData['tokens'])
            .createdAt(rawData['createdAt'])
            .identity(rawData['identity'])
            .id(rawData['_id'])
    }
}

export default CredentialFactory;
