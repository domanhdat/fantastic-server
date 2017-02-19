"use strict";

const CredentialRepository           = require("./credential/credential.repository");
const CredentialFactory              = require("./credential/credential.factory");
const AuthenticateStrategiesProvider = require('./authenticate.strategies.provider');
const EmailAuthenticateStrategy      = require('./authentication.strategies/email');
const TokenAuthenticateStrategy      = require('./authentication.strategies/token');
const RegisterService                = require('./registerService');

module.exports = function *(next) {

    this.CredentialFactory            = CredentialFactory;
    this.credentialRepository         = new CredentialRepository(this.mongo.collection("credentials"));
    let authenticateStrategyProvider  = new AuthenticateStrategiesProvider();
    let registerService               = new RegisterService(this.credentialRepository, this.hasher);

    authenticateStrategyProvider.register(new EmailAuthenticateStrategy(this.credentialRepository));
    authenticateStrategyProvider.register(new TokenAuthenticateStrategy(this.credentialRepository));

    this.authenticateStrategyProvider = authenticateStrategyProvider;

    yield next;
};