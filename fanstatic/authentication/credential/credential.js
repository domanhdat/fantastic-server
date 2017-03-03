"use strict";

class Credential {

    constructor () {
        this.attributes = {
            active: false,
            identities: [],
            tokens: [],
            secret: ""
        };
    }

    /**
     *
     * @param {int} id
     */
    set id(id) {
        this.attributes.id = id;
    }

    /**
     * @return {int} id
     */
    get id() {
        return this.attributes.id;
    }

    /**
     *
     * @param {Array} tokens
     */
    set tokens(tokens) {
        this.attributes.tokens = tokens;
    }

    /**
     *
     * @return {Array}
     */
    get tokens() {
        return this.attributes.tokens;
    }

    /**
     *
      * @param {Array} identities
     */
    set identities(identities) {
        this.attributes.identities = identities;
    }

    /**
     *
     * @return {Array}
     */
    get identities() {
        return this.attributes.identities;
    }

    /**
     *
     * @param createdAt
     */
    set createdAt(createdAt) {
        this.attributes.creatorAt = createdAt;
    }

    /**
     * timeStamp
     */
    get createdAt() {
        return this.attributes.createdAt;
    }

    /**
     *
     * @param {boolean} active
     */
    set active(active) {
        this.attributes.active = active;
    }

    /**
     *
     * @return {boolean}
     */
    get active() {
        return this.attributes.active;
    }

    /**
     *
     * @param {string} secret
     */
    set secret(secret) {
        this.attributes.secret = secret;
    }

    /**
     *
     * @return {string} secret
     */
    get secret() {
        return this.attributes.secret;
    }

    /**
     *
     * @param updatedAt
     */
    set updatedAt(updatedAt) {
        this.attributes.updatedAt = updatedAt;
    }

    /**
     * timeStamp
     */
    get updatedAt() {
        return this.attributes.updatedAt;
    }
}

module.exports = Credential;