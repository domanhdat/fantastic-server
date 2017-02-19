"use strict";

const articleValidate = require('./validate/article.validate');

module.exports.createArticleValidate = function *(next) {
    articleValidate.createArticle(this);
    if (this.errors) {
        this.status = 400;
        this.body   = this.errors;
        return;
    }
    this.state.article = this.articleFactory.buildOne(this.request.body);
    yield next;
};

module.exports.updateArticleValidate = function *(next) {
    articleValidate.updateArticle(this);
    if (this.errors) {
        this.status = 400;
        this.body   = this.errors;
        return;
    }
    this.state.article = this.articleFactory.buildOne(this.request.body);
    yield next;
};
