"use strict";

const ObjectId = require('mongodb').ObjectId;

class CredentialRepository {

    /**
     *
     * @param collection
     * @param {CredentialBuilder} credentialBuilder
     * @param {CredentialReader} credentialReader
     */
    constructor(collection, credentialBuilder, credentialReader) {
        this.collection = collection;
        this.credentialBuilder = credentialBuilder;
        this.credentialReader = credentialReader;
    }

    /**
     *
     * @param id
     * @return Credential credential
     */
    *findById(id) {

        let document = yield this.collection.find({_id: ObjectId(id)}).limit(1);

        if (!document) {
            return null;
        }

        return this.credentialBuilder.buildOneFromDb(document);
    }

    /**
     *
     * @param credential
     */
    *insert(credential) {
        const document = this.credentialReader.read(credential);
        return yield this.collection.insert(document);
    }

    /**
     *
     * @param token
     * @return Credential credential
     */
    *findByToken(token) {
        return this.credentialBuilder.buildOneFromDb(yield this.collection.find({tokens: token}).limit(1).toArray());
    }

    /**
     *
     * @param email
     * @return {boolean}
     */
    *existedActiveWithEmail(email) {
        return (yield this.collection.find ( { "identities.email" : email, "active": true } ).count()) > 0;
    }


    *findActiveByEmail(email) {
        return this.credentialBuilder.buildOneFromDb(yield this.collection.find(
            {
                "identities.email": email,
                active: true
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
        return this.credentialBuilder.buildOneFromDb(yield this.collection.find({
            secret: secret,
            active: false
        }).limit(1).toArray())
    }

    /**
     *
     * @param {Credential} credential
     */
    *update(credential) {

        const document = this.credentialReader.read(credential);

        yield this.collection.update(
            {   _id: ObjectId(credential.id) },
            {
                $set: document
            }
        )
    }
}

module.exports = CredentialRepository;