module.exports.getArticleByArticleId = function *(next) {
    try {
        this.body = yield this.articleRepo.findById(this.params.id);
    } catch (e) {
        this.throw(e);
    }
};

module.exports.saveArticle = function *(next) {
    try {
        this.body = yield this.articleRepo.findById(this.params.id);
    } catch (e) {
        this.throw(e);
    }
};