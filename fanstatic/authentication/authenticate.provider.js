"use strict";

const CredentialRepository = require ( "./credential/credential.repository" );
const CredentialFactory = require ( "./credential/credential.factory" );
const AuthenticateStrategiesProvider = require ( './authenticate.strategies.provider' );
const EmailAuthenticateStrategy = require ( './authentication.strategies/email' );
const TokenAuthenticateStrategy = require ( './authentication.strategies/token' );
const RegisterService = require ( './registerService' );

module.exports = function * ( next ) {

    this.CredentialFactory = CredentialFactory;
    this.credentialRepository = new CredentialRepository ( this.mongo.collection ( "credentials" ) );
    this.registerService = new RegisterService ( this.credentialRepository, this.hasher );

    let authenticateStrategyProvider = new AuthenticateStrategiesProvider ();

    authenticateStrategyProvider.register ( new EmailAuthenticateStrategy ( this.credentialRepository, this.hasher ) );
    authenticateStrategyProvider.register ( new TokenAuthenticateStrategy ( this.credentialRepository ) );

    this.authenticateStrategyProvider = authenticateStrategyProvider;

    yield next;
};