"use strict";

const ObjectId = require('mongodb').ObjectId;
const CredentialFactory = require('./credential.factory');



class CredentialRepository {

    /**
     *
     * @param collection
     */
    constructor(collection) {
        this.collection = collection;
    }

    /**
     *
     * @param id
     * @return Credential credential
     */
    *findById(id) {
        return CredentialFactory.buildOneFromDb(yield this.collection.find({_id: ObjectId(id)}).limit(1).toArray());
    }

    /**
     *
     * @param credential
     */
    *insert(credential) {
        return yield this.collection.insert({
            tokens: credential.tokens,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
            active: credential.active,
            identities: credential.identities,
            secret: credential.secret
        });
    }

    /**
     *
     * @param token
     * @return Credential credential
     */
    *findByToken(token) {
        return CredentialFactory.buildOneFromDb(yield this.collection.find({tokens: token}).limit(1).toArray());
    }

    /**
     *
     * @param email
     * @return Credential credential
     */
    *findAllByEmail(email) {
        return CredentialFactory.buildOneFromDb(yield this.collection.find(
            {
                "identities.email": email,
                "identities.type": "email"
            })
            .limit(1).toArray());
    }

    /**
     *
     * @param token
     * @param credential
     * @return {*}
     */
    *updateWithNewToken(credential, token) {

        return yield this.collection.update(
            { _id: ObjectId(credential.id) },
            {
                $push: { "tokens": {token: token, createdAt: new Date().getTime(), updatedAt: new Date().getTime() }}
            }
        );
    }

    /**
     *
     * @param secret
     * @return {Credential}
     */
    *findBySecret(secret) {
        return CredentialFactory.buildOneFromDb(yield this.collection.find({
            secret: secret,
            active: false
        }).limit(1).toArray())
    }

    /**
     *
     * @param {Credential} credential
     */
    *updateActive(credential) {
        yield this.collection.update(
            {   _id: ObjectId(credential.id) },
            {
                active: credential.active,
                updatedAt: new Date().getTime()
            }
        )
    }
}

module.exports = CredentialRepository;