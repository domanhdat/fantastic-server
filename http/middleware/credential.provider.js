"use strict";

module.exports = function *( next ) {

    this.request.credential = this.CredentialFactory.buildFromRequest(this.request.body);
    yield next;
};