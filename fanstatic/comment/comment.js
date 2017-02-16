"use strict";

class Comment {

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

}

module.exports = Comment;