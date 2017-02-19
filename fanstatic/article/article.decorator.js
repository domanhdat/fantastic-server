

class ArticleDecorator {
    
    /**
     *
     * @param {Article} article
     * @param {Profile|{}} profile
     * @returns {Article}
     */
    static decorate(article, profile) {
        article.setProfile(profile);
        article.setHashTags(ArticleDecorator.getHashTag(article.getContent()));
        return article;
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
