"use strict";


class CredentialReader {

    /**
     * read Credential object and build a document
     *
     * @param {Credential} credential
     * @return {{$push: {}}}
     */
    read(credential) {
        let document = {
            $push: {},
            active: false
        };

        if (credential.active) {
           document.active = true;
        }

        if (!!credential.tokens && credential.tokens.length > 0) {
            document.$push.tokens = { $each: credential.tokens };
        }

        if (!!credential.identities && credential.identities.length > 0) {
            document.$push.identities = {$each: credential.identities };
        }

        if (!!credential.createdAt) {
            document.createdAt = credential.createdAt;
        } else {
            document.createdAt = new Date().getTime()
        }

        if (!!credential.secret) {
            document.secret = credential.secret;
        }

        if (!!credential.updatedAt) {
            document.updatedAt = credential.updatedAt;
        } else {
            document.updatedAt = new Date().getTime()
        }

        return document;
    }
}

module.exports = CredentialReader;
