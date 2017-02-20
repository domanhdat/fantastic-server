"use strict";

exports.getArticleByArticleId = function *() {
    this.body = (yield this.articleRepo.findById(this.params.id)).toJson();
};

exports.saveArticle = function *() {
    try {
        const article = this.articleDecorator.decorate(this.request.body);
        this.body     = yield this.articleRepo.save(article);
    } catch (e) {
        this.status = 500;
        this.body   = e;
    }
};

exports.updateArticle = function *() {
//    const article = this.articleDecorator.decorate(this.state.article, {});
//    this.body     = yield this.articleRepo.update(article);
};