"use strict";

class Token {

    constructor () {
        this.attribute = {
            createdAt: new Date().getTime(),
            updatedAt: null,
            token: null
        }
    }

    get createdAt() {
        return this.attribute.createdAt;
    }

    set updatedAt(value) {
        this.attribute.updatedAt = value;
    }

    get updatedAt() {
        return this.attribute.updatedAt;
    }

    set token(value) {
        this.attribute.token = value;
    }

    get token() {
        return this.attribute.token;
    }

    toJson() {
        return this.attribute;
    }
}

module.exports = Token;