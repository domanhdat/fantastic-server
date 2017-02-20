class ArticleDecorator {
    
    /**
     *
     * @param {ArticleFactory} articleFactory
     * @param {ImageFactory} imageFactory
     * @param {ProfileFactory} profileFactory
     */
    constructor(articleFactory, imageFactory, profileFactory) {
        this.articleFactory = articleFactory;
        this.imageFactory   = imageFactory;
        this.profileFactory = profileFactory;
    }
    
    /**
     *
     * @param {{}} body
     */
    static decorate(body) {
//        article.setProfile(profile);
//        article.setImages(images);
//        article.setHashTags(ArticleDecorator.getHashTag(article.getContent()));
//        return article;
    }
    
    /**
     *
     * @param content
     */
    static getHashTag(content) {
        return (content.match(/(\s|^)\#\w\w+\b/gm) || []).map(tag => tag.trim());
    };
}

module.exports = ArticleDecorator;
