"use strict";

exports.register = function *( next ) {
    const credentialRepository = this.credentialRepository;

    return yield credentialRepository.insert(this.credential);
};