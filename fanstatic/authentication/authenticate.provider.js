"use strict";

const CredentialRepository = require ( "./credential/credential.repository" );
const CredentialBuilder = require ( "./credential/credential.builder" );
const CredentialReader = require ( "./credential/credential.reader" );
const Credential = require("./credential/credential");
const AuthenticateStrategiesProvider = require ( './authenticate.strategies.provider' );
const EmailAuthenticateStrategy = require ( './authentication.strategies/email' );
const TokenAuthenticateStrategy = require ( './authentication.strategies/token' );
const RegisterService = require ( './registerService' );
const ProfileRepository = require ("./../profile/profile.repository");
const ProfileFactory = require("./../profile/profile.factory");


module.exports = function * ( next ) {

    this.credentialRepository = new CredentialRepository (
        this.mongo.collection ( "credentials" ),
        new CredentialBuilder(new Credential()), new CredentialReader()
    );
    const profileRepository = new ProfileRepository(this.mongo.collection ( "profile" ), new ProfileFactory());

    this.registerService = new RegisterService ( this.credentialRepository, this.hasher,  profileRepository);

    let authenticateStrategyProvider = new AuthenticateStrategiesProvider ();

    authenticateStrategyProvider.register ( new EmailAuthenticateStrategy ( this.credentialRepository, this.hasher ) );
    authenticateStrategyProvider.register ( new TokenAuthenticateStrategy ( this.credentialRepository ) );

    this.authenticateStrategyProvider = authenticateStrategyProvider;

    yield next;
};
