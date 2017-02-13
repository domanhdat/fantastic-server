"use strict";

const ObjectId = require('mongodb').ObjectId;

class ProfileRepository {

    /**
     *
     * @param collection
     * @param {ProfileFactory} profileFactory
     */
    constructor(collection, profileFactory) {
        this.collection = collection;
        this.profileFactory = profileFactory;
    }

    /**
     *
     * @param _id
     * @returns {Promise<Profile>}
     */
    getProfile(_id) {
        return this.collection.find({
            _id : ObjectId(_id)
        }).limit(1).next().then(rawProfile => {
            if (!rawProfile) {
                throw ('Not Found Profile');
            }
            this.profileFactory.build(rawProfile);
        });
    }

    /**
     *
     * @param profile
     * @returns {*|{document}|Promise}
     */
    updateProfile(profile) {
        return this.collection.updateOne({
                _id: ObjectId(profile.getId())
            },
            {
                $set: {
                    phone       : profile.getPhone(),
                    name        : profile.getName(),
                    dateOfBirth : profile.getPhone(),
                    avatar      : profile.getAvatar(),
                    coverPhoto  : profile.getCoverPhoto(),
                    description : profile.getDescription()
                }
            });
    }

    /**
     *
     * @param profile
     * @returns {*|{document}|Promise}
     */
    saveProfile(profile) {
        return this.collection.insertOne({
            credentialId : profile.getCredentialId(),
            phone        : profile.getPhone(),
            name         : profile.getName(),
            dateOfBirth  : profile.getPhone(),
            avatar       : profile.getAvatar(),
            coverPhoto   : profile.getCoverPhoto(),
            description  : profile.getDescription()
        })
    }

}

module.exports = ProfileRepository;