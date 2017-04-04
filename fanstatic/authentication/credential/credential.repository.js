"use strict";

const ObjectId = require('mongodb').ObjectId;

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
        return yield this.collection.find({_id: ObjectId(id)}).limit(1);
    }

    /**
     *
     * @param credential
     */
    insert(credential) {

        let document = {
            identities: credential.identities,
            active: false,
            secret: credential.secret,
            updatedAt: new Date().getTime(),
            createdAt: new Date().getTime()
        };

        return this.collection.insert(document);
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

    /**
     *
     * @param email
     * @return {boolean}
     */
    *existedWithEmail(email) {
        return (yield this.collection.find ( { "identities.email" : email } ).count()) > 0;
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
     * @return {*}
     */
    *findBySecret(secret) {
        return yield this.collection.find({
            secret: secret,
            active: false
        }).limit(1);
    }

    /**
     *
     * @param {Credential} credential
     */
    *updateActive(credential) {

        yield this.collection.update(
            {   _id: ObjectId(credential.id) },
            {
                $set: {
                    active: true
                }
            }
        )
    }
}

module.exports = CredentialRepository;
