"use strict";

class Image {
    
    constructor() {
        this.attribute = {};
    }
    
    /**
     *
     * @param {ObjectID|string} id
     * @returns {Image}
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
     * @param path
     * @returns {Image}
     */
    setPath(path) {
        this.attribute['path'] = path;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getPath() {
        return this.attribute['path'];
    }
    
    /**
     *
     * @param commentCount
     * @returns {Image}
     */
    setCommentCount(commentCount) {
        this.attribute['commentCount'] = commentCount;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getCommentCount() {
        return this.attribute['commentCount'];
    }
    
    /**
     *
     * @param likeCount
     * @returns {Image}
     */
    setLikeCount(likeCount) {
        this.attribute['likeCount'] = likeCount;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getLikeCount() {
        return this.attribute['likeCount'];
    }
    
    /**
     *
     * @param shareCount
     * @returns {Image}
     */
    setShareCount(shareCount) {
        this.attribute['shareCount'] = shareCount;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getShareCount() {
        return this.attribute['shareCount'];
    }
    
    /**
     *
     * @param profile
     * @returns {Image}
     */
    setProfile(profile) {
        this.attribute['profile'] = profile;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getProfile() {
        return this.attribute['profile'];
    }
    
    /**
     *
     * @param createdAt
     * @returns {Image}
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
     * @returns {Image}
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
     * @param deletedAt
     * @returns {Image}
     */
    setDeletedAt(deletedAt) {
        this.attribute['deletedAt'] = deletedAt;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getDeletedAt() {
        return this.attribute['deletedAt'];
    }
    
    /**
     *
     * @param bandAt
     * @returns {Image}
     */
    setBandAt(bandAt) {
        this.attribute['bandAt'] = bandAt;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getBandAt() {
        return this.attribute['bandAt'];
    }
    
    /**
     *
     * @returns {{}|*}
     */
    toJson() {
        return this.attribute;
    }
}

module.exports = Image;