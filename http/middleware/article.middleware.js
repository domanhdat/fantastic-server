const articleValidate = require('./validate/article.validate');

module.exports.createArticleValidate = function *(next) {
    articleValidate.createArticle(this);
    if (this.errors) {
        this.body = this.errors;
        return;
    }
    yield next;
};