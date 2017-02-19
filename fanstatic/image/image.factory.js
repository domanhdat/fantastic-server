"use strict";

const Image = require('./image');

class ImageFactory {
    
    constructor() {
    }
    
    /**
     *
     * @param rawData
     * @returns {Image}
     */
    buildOne(rawData = {}) {
        return new Image()
            .setId(rawData['_id'])
            .setImages(rawData['images'])
            .setProfile(rawData['profile'])
            .setLikeCount(rawData['likeCount'])
            .setCommentCount(rawData['commentCount'])
            .setShareCount(rawData['shareCount'])
            .setCreatedAt(rawData['createdAt'])
            .setUpdatedAt(rawData['updatedAt'])
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

module.exports = ImageFactory;