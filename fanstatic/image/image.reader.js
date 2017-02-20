const moment = require('moment');

class ImageReader {
    
    /**
     *
     * @param {Image} image
     */
    read(image) {
        return {
            _id         : image.getId(),
            url         : image.getImages(),
            commentCount: image.getCommentCount(),
            likeCount   : image.getLikeCount(),
            shareCount  : image.getShareCount(),
            profile     : image.getProfile(),
            createdAt   : image.getCreatedAt() || moment().unix(),
            updatedAt   : moment().unix(),
            deletedAt   : image.getDeletedAt(),
            bandAt      : image.getBandAt(),
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