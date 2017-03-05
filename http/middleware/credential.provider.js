"use strict";

module.exports = function *( next ) {

    this.request.credential = this.buildFromRequest(this.request.body);
    yield next;
};