"use strict";

const bcrypt = require('bcryptjs');
const rantoken = require("rand-token").suid;
const config = require('./../config');

class Hasher {

    /**
     *
     * @param text
     * @param hashedText
     * @return {Promise}
     */
    compare(text, hashedText) {
        return new Promise((resolve, reject) => {
            return bcrypt.compare(text, hashedText, function (error, result) {
                if (error) return reject(error);
                resolve(result);
            })
        })
    }

    /**
     *
     * @param text
     * @return {Promise}
     */
    hash(text) {
        return new Promise( (resolve, reject) => {
            bcrypt.hash(text, config.authentication.salt, function(error, result) {
                if (error) return reject(error);

                resolve(result)
            })
        } )
    }

    /**
     *
     * @param length
     * @return {*}
     */
    generateRandomKey(length) {
        return rantoken( length || config.authentication.tokenLength || 16);
    }
}

module.exports = function *( next ) {
    this.hasher = new Hasher();

    yield next;
};