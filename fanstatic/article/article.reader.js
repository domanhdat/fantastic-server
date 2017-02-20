const moment = require('moment');

class ArticleReader {
    
    /**
     *
     * @param {ImageReader} imageReader
     */
    constructor(imageReader) {
        this.imageReader = imageReader;
    }
    
    /**
     *
     * @param {Article} article
     */
    read(article) {
        return {
            _id         : article.getId(),
            content     : article.getContent(),
            images      : this.imageReader.readMany(article.getImages()),
            hashTags    : article.getHashTags(),
            contentLink : article.getContentLink(),
            commentCount: article.getCommentCount(),
            likeCount   : article.getLikeCount(),
            shareCount  : article.getShareCount(),
            profile     : article.getProfile(),
            createdAt   : article.getCreatedAt() || moment().unix(),
            deletedAt   : article.getDeletedAt(),
            bandAt      : article.getBandAt(),
            updatedAt   : moment().unix(),
        };
    }
}

module.exports = ArticleReader;