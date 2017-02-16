"use strict";

const lodash = require("lodash");

class AuthenticateStrategiesProvider {

    constructor () {
        this.strategies = [];
    }

    register(strategy) {
        this.strategies.push(strategy);
        return this;
    }

    provide(strategyName) {
        return lodash.find(this.strategies, ['name', strategyName]);
    }
}

module.exports = AuthenticateStrategiesProvider;