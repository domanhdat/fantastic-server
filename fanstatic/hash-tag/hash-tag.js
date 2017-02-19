"use strict";

class HashTag {
    
    constructor() {
        this.attribute = {};
    }
    
    /**
     *
     * @param {ObjectID|string} id
     * @returns {HashTag}
     */
    setId(id) {
        this.attribute['_id'] = id;
        return this;
    }
    
    /**
     *
     * @returns {*|{}}
     */
    getId() {
        return this.attribute['_id'];
    }
    
    /**
     *
     * @param name
     * @returns {HashTag}
     */
    setName(name) {
        this.attribute['name'] = name;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getName() {
        return this.attribute['name'];
    }
    
    /**
     *
     * @param createdAt
     * @returns {HashTag}
     */
    setCreatedAt(createdAt) {
        this.attribute['createdAt'] = createdAt;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getCreatedAt() {
        return this.attribute['createdAt'];
    }
    
    /**
     *
     * @param updatedAt
     * @returns {HashTag}
     */
    setUpdatedAt(updatedAt) {
        this.attribute['updatedAt'] = updatedAt;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getUpdatedAt() {
        return this.attribute['updatedAt'];
    }
    
    /**
     *
     * @returns {{}|*}
     */
    toJson() {
        return this.attribute;
    }
}

module.exports = HashTag;