"use strict";

const {ArticleRepository, ArticleFactory, ArticleReader, ArticleDecorator}                 = require('./index');
const {ImageReader, ImageFactory}                                                          = require('./../image');
const ProfileFactory                                                                       = require('./../profile/profile.factory');

module.exports = function *(next) {
    const articleReader  = new ArticleReader(new ImageReader());
    const articleFactory = new ArticleFactory();
    const profileFactory = new ProfileFactory();
    
    this.articleRepo      = new ArticleRepository(this.mongo.collection('articles'), articleFactory, articleReader);
    this.articleFactory   = new ArticleFactory();
    this.articleDecorator = new ArticleDecorator(articleFactory, ImageFactory, profileFactory);
    yield next;
};