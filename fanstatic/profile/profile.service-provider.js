"use strict";

const ProfileRepository = require('./profile.repository');

module.exports = function *(next) {
    this.profileRepo = new ProfileRepository(this.mongo.collection('profile'));
    yield next;
};