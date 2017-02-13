"use strict";

class Profile {

    constructor() {
        this.attribute = {};
    }

    /**
     * @public
     *
     * @returns {*}
     */
    getId() {
        return this.attribute['_id'];
    }

    /**
     * @public
     * @param id
     *
     */
    setId(id) {
        this.attribute['_id'] = id;
        return this;
    }


    /**
     * @public
     * @returns {*}
     */
    getCredentialId() {
        return this.attribute['credentialId']
    }

    /**
     *
     * @param credentialId
     * @returns {Profile}
     */
    setCredentialId(credentialId) {
        this.attribute['credentialId'] = credentialId;
        return this;
    }

    /**
     * @public
     *
     * @returns {*}
     */
    getPhone() {
        return this.attribute['phone'];
    }

    /**
     * @public
     *
     * @param phone
     */
    setPhone(phone) {
        this.attribute['phone'] = phone;
        return this;
    }

    /**
     * @public
     *
     * @returns {*}
     */
    getName() {
        return this.attribute['name'];
    }

    /**
     * @public
     */
    setName(name) {
        this.attribute['name'] = name;
        return this;
    }

    /**
     *
     * @public
     *
     * @returns {*}
     */
    getDateOfBirth() {
        return this.attribute['dateOfBirth'];
    }

    /**
     * @public
     *
     * @param dateOfBirth
     */
    setDateOfBirth(dateOfBirth) {
        this.attribute['dateOfBirth'] = dateOfBirth;
    }

    /**
     * @public
     */
    getAvatar() {
        return this.attribute['avatar'];
    }

    /**
     * @public
     *
     * @param avatar
     */
    setAvatar(avatar) {
        this.attribute['avatar'] = avatar;
    }

    /**
     * @public
     */
    getCoverPhoto() {
        return this.attribute['coverPhoto'];
    }

    /**
     * @public
     *
     * @param coverPhoto
     */
    setCoverPhoto(coverPhoto) {
        this.attribute['coverPhoto'] = coverPhoto;
        return this;
    }

    /**
     * @public
     * @returns {*}
     */
    getDescription(){
        return this.attribute['description'];
    }

    /**
     * @public
     *
     * @param description
     * @returns {Profile}
     */
    setDescription(description) {
        this.attribute['description'] = description;
        return this;
    }

}

module.exports = Profile;