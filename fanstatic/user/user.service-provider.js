"use strict";

const UserRepository = require('./user.repository');

module.exports = function *(next) {
    this.userRepo = new UserRepository(this.mongo.collection('users'));
    yield next;
};