"use strict";

class Credential {

    constructor () {
        this.attribute = {
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
        this.attribute.id = id;
    }

    /**
     * @return {int} id
     */
    get id() {
        return this.attribute.id;
    }

    /**
     *
     * @param {Array} tokens
     */
    set tokens(tokens) {
        this.attribute.tokens = tokens;
    }

    /**
     *
     * @return {Array}
     */
    get tokens() {
        return this.attribute.tokens;
    }

    /**
     *
      * @param {Array} identities
     */
    set identities(identities) {
        this.attribute.identities = identities;
    }

    /**
     *
     * @return {Array}
     */
    get identities() {
        return this.attribute.identities;
    }

    /**
     *
     * @param createdAt
     */
    set createdAt(createdAt) {
        this.attribute.creatorAt = createdAt;
    }

    /**
     * timeStamp
     */
    get createdAt() {
        return this.attribute.createdAt;
    }

    /**
     *
     * @param {boolean} active
     */
    set active(active) {
        this.attribute.active = active;
    }

    /**
     *
     * @return {boolean}
     */
    get active() {
        return this.attribute.active;
    }

    /**
     *
     * @param {string} secret
     */
    set secret(secret) {
        this.attribute.secret = secret;
    }

    /**
     *
     * @return {string} secret
     */
    get secret() {
        return this.attribute.secret;
    }

    /**
     *
     * @param updatedAt
     */
    set updatedAt(updatedAt) {
        this.attribute.updatedAt = updatedAt;
    }

    /**
     * timeStamp
     */
    get updatedAt() {
        return this.attribute.updatedAt;
    }
}

module.exports = Credential;