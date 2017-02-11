"use strict";

const ArticleRepository = require('./article.repository');

module.exports = function *(next) {
    this.articleRepo = new ArticleRepository(this.mongo.collection('articles'));
    yield next;
};