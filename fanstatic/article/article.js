"use strict";

class Article {
    
    constructor() {
        this.attribute = {};
    }
    
    /**
     *
     * @param {ObjectID|string} id
     * @returns {Article}
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
     * @param content
     * @returns {Article}
     */
    setContent(content) {
        this.attribute['content'] = content;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getContent() {
        return this.attribute['content'];
    }
    
    /**
     *
     * @param {[Image]} images
     * @returns {Article}
     */
    setImages(images) {
        this.attribute['images'] = images;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getImages() {
        return this.attribute['images'];
    }
    
    /**
     *
     * @param {[]} hashTags
     * @returns {Article}
     */
    setHashTags(hashTags) {
        this.attribute['hashTags'] = hashTags;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getHashTags() {
        return this.attribute['hashTags'];
    }
    
    /**
     *
     * @param {[]} contentLink
     * @returns {Article}
     */
    setContentLink(contentLink) {
        this.attribute['contentLink'] = contentLink;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getContentLink() {
        return this.attribute['contentLink'];
    }
    
    /**
     *
     * @param commentCount
     * @returns {Article}
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
     * @returns {Article}
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
     * @returns {Article}
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
     * @returns {Article}
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
     * @returns {Article}
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
     * @returns {Article}
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
     * @returns {Article}
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
     * @returns {Article}
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

module.exports = Article;