"use strict";

const ArticleRepository = require('./article.repository');
const ArticleFactory    = require('./article.factory');

module.exports = function *(next) {
    this.articleRepo = new ArticleRepository(this.mongo.collection('articles'), new ArticleFactory());
    yield next;
};