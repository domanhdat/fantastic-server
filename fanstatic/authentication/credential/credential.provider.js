"use strict";

const CredentialRepository = require("./credential.repository");
const Credential           = require("./credential");

module.exports = function *(next) {
    this.credentialRepository = new CredentialRepository(this.mongo.collection("credentials"), new Credential());
    yield next;
};