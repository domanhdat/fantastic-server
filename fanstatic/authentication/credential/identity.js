"use strict";

class Identity {

    constructor () {
        this.attributes = {}
    }

    set type(value) {
        this.attributes.type = value;
    }

    get type() {
        return this.attributes
    }

    set(attrName, attrValue) {
        this.attributes[attrName] = attrValue;
    }

    get(attrName) {
        return this.attributes[attrName];
    }

    toJson() {
        return this.attributes
    }
}

module.exports = Identity;