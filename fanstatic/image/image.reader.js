const moment = require('moment');

class ImageReader {
    
    /**
     *
     * @param {Article} article
     */
    read(article) {
        return {
            _id         : article.getId(),
            images      : article.getImages(),
            commentCount: article.getCommentCount(),
            likeCount   : article.getLikeCount(),
            shareCount  : article.getShareCount(),
            profile     : article.getProfile(),
            createdAt   : article.getCreatedAt() || moment().unix(),
            updatedAt   : moment().unix(),
        };
    }
    
    /**
     *
     * @param {[]} articles
     */
    readMany(articles) {
        return (articles || []).map(this.read);
    }
}

module.exports = ImageReader;