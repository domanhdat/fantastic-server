"use strict";

class Credential {

    constructor () {
        this.attribute = {
            activated: false
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

    set identity(identity) {
        this.attribute.identity = identity;
        return this;
    }

    get identity() {
        return this.attribute.identity;
    }

    set createdAt(createdAt) {
        this.attribute.creatorAt = createdAt;
        return this;
    }

    get createdAt() {
        return this.attribute.createdAt;
    }

    markAsActivated() {
        this.attribute.activated = false;
        return this;
    }

    get activated() {
        return this.attribute.activated;
    }

    set updatedAt(updatedAt) {
        this.attribute.updatedAt = updatedAt;
        return this;
    }

    get updatedAt() {
        return this.attribute.updatedAt;
    }
}

export default Credential;