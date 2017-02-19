"use strict";

const Credential = require('./credential');

class CredentialFactory {

    static buildOneFromDb(rawData) {
        if ( ! (rawData.length > 0)) {
            return null
        }
        let row = rawData[0];
        let credential = new Credential();

        credential.tokens     = row['tokens'];
        credential.createdAt  = row['createdAt'];
        credential.updatedAt  = row['updatedAt'];
        credential.identities = row['identities'];
        credential.id         = row['_id'];
        credential.active     = row['active'];

        return credential;
    }

    static buildFromRequest(rawData) {

        let credential = new Credential();

        credential.createdAt  = new Date().getTime();
        credential.updatedAt  = new Date().getTime();
        credential.identities.push({
            email: rawData.email,
            password: rawData.password,
            type: "email"
        });

        return credential;
    }
}

module.exports = CredentialFactory;
