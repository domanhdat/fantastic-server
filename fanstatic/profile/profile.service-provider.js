"use strict";

const ProfileRepository = require('./profile.repository');
const ProfileFactory = require('./profile-factory');

module.exports = function *(next) {
    this.profileRepo = new ProfileRepository(this.mongo.collection('profile'), new ProfileFactory());
    yield next;
};