"use strict";

const bcrypt = require('bcryptjs');
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
            bcrypt.compare(text, hashedText, function (error, result) {
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
}

module.exports = function *( next ) {
    this.hasher = new Hasher();

    yield next;
};