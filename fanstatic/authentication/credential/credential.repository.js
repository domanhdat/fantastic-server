"use strict";

const ObjectId = require('mongodb').ObjectId;



class CredentialRepository {

    /**
     *
     * @param collection
     * @param credentialFactory
     */
    constructor(collection, credentialFactory) {
        this.collection = collection;
        this.credentialFactory = credentialFactory;
    }

    /**
     *
     * @param id
     * @return Credential credential
     */
    *findById(id) {
        return this.credentialFactory.buildOneFromDb(yield this.collection.find({_id: ObjectId(id)}).limit(1).toArray());
    }

    /**
     *
     * @param credential
     */
    *insert(credential) {
        yield this.collection.insert({
            token: credential.token,
            createdAt: new Date().getTime(),
            activated: credential.activated,
            identity: credential.identity,

        });
    }

    /**
     *
     * @param token
     * @return Credential credential
     */
    *findByToken(token) {
        return this.credentialFactory.buildOneFromDb(yield this.collection.find({tokens: token}).limit(1).toArray());
    }

    /**
     *
     * @param email
     * @return Credential credential
     */
    *findByEmail(email) {
        return this.credentialFactory.buildOneFromDb(yield this.collection.find({"identity.email": email}).limit(1).toArray());
    }

    /**
     *
     * @param token
     * @param credential
     * @return {*}
     */
    *updateWithNewToken(credential, token) {
        yield this.collection.update(
            {_id: credential.id},
            { $push: { tokens: {token: token, createdAt: new Date().getTime() }}}
        );
    }
}

module.exports = CredentialRepository;