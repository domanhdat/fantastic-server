"use strict";

const {ArticleShareRepository} = require('./inddex');

module.exports = function *(next) {
    this.articleShareRepo = new ArticleShareRepository(this.mongo.collection('article-share'));
    yield next;
};