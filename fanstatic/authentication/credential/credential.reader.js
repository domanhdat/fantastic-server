"use strict";


class CredentialReader {

    /**
     *
     * @param {Credential} credential
     * @return {{$push: {}}}
     */
    read(credential) {
        let document = {
            $push: {}
        };

        if (!!credential.active) {
           document.active = credential.active;
        }

        if (!!credential.tokens && credential.tokens.length > 0) {
            document.$push.tokens = { $each: credential.tokens };
        }

        if (!!credential.identities && credential.identities.length > 0) {
            document.$push.identities = {$each: credential.identities };
        }

        if (!!credential.createdAt) {
            document.createdAt = credential.createdAt;
        }

        if (!!credential.secret) {
            document.secret = credential.secret;
        }

        if (!!credential.updatedAt) {
            document.updatedAt = credential.updatedAt;
        }

        return document;
    }
}

module.exports = CredentialReader;
