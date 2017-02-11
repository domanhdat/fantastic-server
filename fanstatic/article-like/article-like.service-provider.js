"use strict";

const ArticleLikeRepository = require('./article-like.repository');

module.exports = function *(next) {
    this.articleLikeRepo = new ArticleLikeRepository(this.mongo.collection('article-like'));
    yield next;
};