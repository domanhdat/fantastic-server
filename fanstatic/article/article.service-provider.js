"use strict";

const ArticleRepository = require('./article.repository');
const ArticleFactory    = require('./article.factory');
const ArticleReader     = require('./article.reader');
const ArticleDecorator  = require('./article.decorator');
const ImageReader       = require('./../image/image.reader');

module.exports = function *(next) {
    const articleReader  = new ArticleReader(new ImageReader());
    const articleFactory = new ArticleFactory();
    
    this.articleRepo      = new ArticleRepository(this.mongo.collection('articles'), articleFactory, articleReader);
    this.articleFactory   = new ArticleFactory();
    this.articleDecorator = ArticleDecorator;
    yield next;
};