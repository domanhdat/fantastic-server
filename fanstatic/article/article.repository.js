"use strict";

const ObjectId = require('mongodb').ObjectId;

class ArticleRepository {
    
    /**
     *
     * @param collection
     * @param {ArticleFactory} articleFactory
     * @param {ArticleReader} articleReader
     */
    constructor(collection, articleFactory, articleReader) {
        this.collection     = collection;
        this.articleFactory = articleFactory;
        this.articleReader  = articleReader;
    }
    
    /**
     *
     * @param {string} id
     * @returns {Promise}
     */
    findById(id) {
        return this.collection.find({_id: ObjectId(id)}).limit(1).next().then(result => {
            if (!result) {
                throw ('aaa');
            }
            return this.articleFactory.buildOne(result);
        });
    }
    
    /**
     *
     * @param {Article} article
     * @returns {*|Promise}
     */
    save(article) {
        return this.collection.save(article.toJson());
    }
    
    /**
     *
     * @param {Article} article
     * @returns {*|Promise}
     */
    update(article) {
        const articleId = article.getId();
        article         = this.articleReader.read(article);
        delete article['id'];
        return this.collection.save({_id: ObjectId(articleId)}, {$set: article});
    }
}

module.exports = ArticleRepository;