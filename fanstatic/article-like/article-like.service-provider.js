"use strict";

const {ArticleLikeRepository} = require('./inddex');

module.exports = function *(next) {
    this.articleLikeRepo = new ArticleLikeRepository(this.mongo.collection('article-like'));
    yield next;
};