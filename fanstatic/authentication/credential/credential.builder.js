"use strict";

const Credential = require('./credential');
const Token = require('./token');
const Identity = require('./identity');
const FACEBOOK = "Facebook";
const GOOGLE = "Google";


class CredentialBuilder {

    buildOneFromDb(document) {
        let credential = new Credential();
        credential.tokens = this.buildTokens(document.tokens);
        credential.identities = this.buildIdentities(document.identities);
        credential.createdAt  = document['createdAt'];
        credential.updatedAt  = document['updatedAt'];
        credential.identities = document['identities'];
        credential.id         = document['_id'];
        credential.active     = document['active'];

        return credential;
    }

    buildTokens(rawData) {

        let  tokens = [];

        if (!!rawData && rawData.length > 0) {
            rawData.forEach( (row) => {
                let tokenWrapper = new Token;
                tokenWrapper.updatedAt = row["updatedAt"];
                tokenWrapper.createdAt = row["updatedAt"];
                tokenWrapper.token = row["token"];

                tokens.push(tokenWrapper);
            })
        }

        return tokens;
    }

    buildIdentities(rawData) {

        let  identities = [];

        if (!!rawData && rawData.length > 0) {
            rawData.forEach( (row) => {
                let identity = new Identity();

                identity.type = row["type"];

                switch(identity.type) {
                    case FACEBOOK:
                        identity.set("id", row["id"]);
                        break;
                    case GOOGLE:
                        identity.set("id", row["id"]);
                        break;
                    default:
                        identity.set("email", row["email"]);
                        identity.set("password", row["password"]);
                }

                identities.push(identity);
            })
        }

        return identities;
    }

    buildManyFromDb(documents) {

        let credentials = [];

        if (!!documents && documents.length > 0) {
            documents.forEach((document) => {
                credentials.push(this.buildOneFromDb(document));
            });
        }

        return credentials;
    }
}

module.exports = CredentialBuilder;
