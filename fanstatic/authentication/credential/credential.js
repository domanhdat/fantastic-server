"use strict";

class Credential {

    constructor () {
        this.attribute = {
            active: false,
            identities: []
        };
    }

    set id(id) {
        this.attribute.id = id;
        return this;
    }

    get id() {
        return this.attribute.id;
    }

    set tokens(tokens) {
        this.attribute.tokens = tokens;
        return this;
    }

    get tokens() {
        return this.attribute.tokens;
    }

    set identities(identities) {
        this.attribute.identities = identities;
        return this;
    }

    get identities() {
        return this.attribute.identities;
    }

    set createdAt(createdAt) {
        this.attribute.creatorAt = createdAt;
        return this;
    }

    get createdAt() {
        return this.attribute.createdAt;
    }

    set active(active) {
        this.attribute.active = active;
        return this;
    }

    get active() {
        return this.attribute.active;
    }

    set secret(secret) {
        this.attribute.secret = secret;
    }

    get secret() {
        return this.attribute.secret;
    }

    set updatedAt(updatedAt) {
        this.attribute.updatedAt = updatedAt;
        return this;
    }

    get updatedAt() {
        return this.attribute.updatedAt;
    }
}

module.exports = Credential;