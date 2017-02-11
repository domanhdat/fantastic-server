"use strict";

const ArticleShareRepository = require('./article-share.repository');

module.exports = function *(next) {
    this.articleShareRepo = new ArticleShareRepository(this.mongo.collection('article-share'));
    yield next;
};