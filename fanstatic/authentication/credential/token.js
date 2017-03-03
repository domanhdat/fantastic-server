"use strict";

class Token {

    constructor () {
        this.attributes = {
            createdAt: new Date().getTime(),
            updatedAt: null,
            token: null
        }
    }

    set createdAt(value) {
        this.attributes.createdAt = value;
    }

    get createdAt() {
        return this.attributes.createdAt;
    }

    set updatedAt(value) {
        this.attributes.updatedAt = value;
    }

    get updatedAt() {
        return this.attributes.updatedAt;
    }

    set token(value) {
        this.attributes.token = value;
    }

    get token() {
        return this.attributes.token;
    }

    toJson() {
        return this.attributes;
    }
}

module.exports = Token;