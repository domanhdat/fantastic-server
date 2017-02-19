"use strict";

module.exports = function *( next ) {

    this.credential = this.CredentialFactory.buildFromRequest(this.request.body);

    yield next;
};