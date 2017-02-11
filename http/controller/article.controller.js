module.exports.getArticleByArticleId = function *(next) {
    try {
        this.body = this.articleRepo.findById(this.params.id);
    } catch (e) {
        yield next;
    }
};

module.exports.saveArticle = function *(next) {
    try {
        this.body = this.articleRepo.findById(this.params.id);
    } catch (e) {
        yield next;
    }
};