class Profile {
    /**
     * @private
     */
    _id;

    /**
     * @private
     */
    phone;

    /**
     * @private
     */
    name;

    /**
     * @
     */
    dateOfBirth;

    /**
     * @private
     */
    avatar;

    /**
     * @public
     *
     * @returns {*}
     */
    getId() {
        return this._id;
    }

    /**
     * @private
     * @param id
     *
     */
    setId(id) {
        this._id = id;
        return this;
    }


    /**
     * @public
     *
     * @returns {*}
     */
    getPhone() {
        return this.phone;
    }

    /**
     * @private
     *
     * @param phone
     */
    setPhone(phone) {
        this.phone = phone;
        return this;
    }

    /**
     * @public
     *
     * @returns {*}
     */
    getName() {
        return this.name;
    }

    /**
     * @private
     */
    setName(name) {
        this.name = name;
        return this;
    }

    /**
     *
     * @public
     *
     * @returns {*}
     */
    getDateOfBirth() {
        return this.dateOfBirth;
    }

    /**
     * @private
     *
     * @param dateOfBirth
     */
    setDateOfBirth(dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    /**
     * @public
     */
    getAvatar() {
        return this.avatar;
    }

    /**
     * @private
     *
     * @param avatar
     */
    setAvatar(avatar) {
        this.avatar = avatar;
    }
}