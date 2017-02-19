"use strict";

class ArticleLike {
    
    constructor() {
        this.attribute = {};
    }
    
    /**
     *
     * @param id
     * @returns {ArticleLike}
     */
    setId(id) {
        this.attribute['_id'] = id;
        return this;
    }
    
    /**
     *
     * @param id
     * @returns {*}
     */
    getId(id) {
        return this.attribute['_id'];
    }
    
    /**
     *
     * @param profileId
     * @returns {ArticleLike}
     */
    setProfileId(profileId) {
        this.attribute['profileId'] = profileId;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getProfileId() {
        return this.attribute['profileId'];
    }
    
    /**
     *
     * @param articleId
     * @returns {ArticleLike}
     */
    setArticleId(articleId) {
        this.attribute['articleId'] = articleId;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getArticleId() {
        return this.attribute['articleId'];
    }
    
    /**
     *
     * @param createdAt
     * @returns {ArticleLike}
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
     * @returns {ArticleLike}
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

module.exports = ArticleLike;