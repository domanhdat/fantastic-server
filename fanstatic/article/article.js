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
     *
     * @param {string} title
     * @returns {Article}
     */
    setTitle(title) {
        this.attribute['_title'] = title;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getTitle() {
        return this.attribute['_title'];
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
     * @param images
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
     * @param user
     * @returns {Article}
     */
    setUser(user) {
        this.attribute['user'] = user;
        return this;
    }
    
    /**
     *
     * @returns {*}
     */
    getUser() {
        return this.attribute['userId'];
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
    setUpdateddAt(updatedAt) {
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

module.exports = Article;