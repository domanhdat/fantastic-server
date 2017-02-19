"use strict";

module.exports.getArticleByArticleId = function *() {
    this.body = (yield this.articleRepo.findById(this.params.id)).toJson();
};

module.exports.saveArticle = function *() {
    const article = this.articleDecorator.decorate(this.state.article, {});
    this.body     = yield this.articleRepo.save(article);
};

module.exports.updateArticle = function *() {
    const article = this.articleDecorator.decorate(this.state.article, {});
    this.body     = yield this.articleRepo.update(article);
};