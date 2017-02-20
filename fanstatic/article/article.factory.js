"use strict";

const {Article} = require('./index');

class ArticleFactory {
    
    constructor() {
    }
    
    /**
     *
     * @param rawData
     * @returns {Article}
     */
    buildOne(rawData = {}) {
        return new Article()
            .setId(rawData['_id'])
            .setContent(rawData['content'])
            .setImages(rawData['images'])
            .setProfile(rawData['profile'])
            .setLikeCount(rawData['likeCount'])
            .setCommentCount(rawData['commentCount'])
            .setHashTags(rawData['hasTags'])
            .setContentLink(rawData['contentLink'])
            .setShareCount(rawData['shareCount'])
            .setCreatedAt(rawData['createdAt'])
            .setUpdatedAt(rawData['updatedAt'])
            .setDeletedAt(rawData['deletedAt'])
            .setBandAt(rawData['bandAt'])
            ;
    }
    
    /**
     *
     * @param rawDataList
     * @returns {*|{}|Cursor|Array}
     */
    buildMany(rawDataList) {
        return rawDataList.map(this.buildOne);
    }
}

module.exports = ArticleFactory;