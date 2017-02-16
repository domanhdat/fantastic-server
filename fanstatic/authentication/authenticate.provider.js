"use strict";

const CredentialRepository           = require("./credential/credential.repository");
const Credential                     = require("./credential/credential");
const AuthenticateStrategiesProvider = require('./authenticate.strategies.provider');
const EmailAuthenticateStrategy      = require('./authentication.strategies/email');
const TokenAuthenticateStrategy      = require('./authentication.strategies/token');

module.exports = function *(next) {

    this.credentialRepository = new CredentialRepository(this.mongo.collection("credentials"), new Credential());
    let authenticateStrategyProvider = new AuthenticateStrategiesProvider();
    authenticateStrategyProvider.register(new EmailAuthenticateStrategy(this.credentialRepository));
    authenticateStrategyProvider.register(new TokenAuthenticateStrategy(this.credentialRepository));
    this.authenticateStrategyProvider = authenticateStrategyProvider;

    yield next;
};