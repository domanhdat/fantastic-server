"use strict";

const AuthenticateStrategiesProvider = require('./authenticate.strategies.provider');
const EmailAuthenticateStrategy      = require('./authentication.strategies/email');

module.exports = function (app) {
    let authenticateStrategyProvider = new AuthenticateStrategiesProvider();
    authenticateStrategyProvider.register(new EmailAuthenticateStrategy());
    authenticateStrategyProvider.register(new EmailAuthenticateStrategy());

};