"use strict";

const Profile = require('./profile');

class ProfileFactory {

    constructor() {
    }

    /**
     *
     * @param rawData
     * @returns {Profile}
     */
    build(rawData = {}) {
        return new Profile()
            .setId(rawData['_id'])
            .setCredentialId(rawData['credentialId'])
            .setPhone(rawData['phone'])
            .setName(rawData['name'])
            .setDateOfBirth(rawData['dateOfBirth'])
            .setAvatar(rawData['avatar'])
            .setCoverPhoto(rawData['coverPhoto'])
            .setDescription(rawData['description'])
            ;
    }

    makeProfile(requestData = {}) {
        return new Profile()
            .setCredentialId(requestData['credentialId'])
            .setPhone(requestData['phone'])
            .setName(requestData['name'])
            .setDateOfBirth(requestData['dateOfBirth'])
            .setAvatar(requestData['avatar'])
            .setCoverPhoto(requestData['coverPhoto'])
            .setDescription(requestData['description'])
            ;
    }
}

module.exports = ProfileFactory;