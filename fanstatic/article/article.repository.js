"use strict";

const ObjectId = require('mongodb').ObjectId;

class ArticleRepository {
    
    /**
     *
     * @param collection
     * @param {ArticleFactory} articleFactory
     */
    constructor(collection, articleFactory) {
        this.collection     = collection;
        this.articleFactory = articleFactory;
    }
    
    findById(id) {
        return this.collection.find({_id: ObjectId(id)}).limit(1).next().then(result => {
            if (!result) {
                throw ('aaa');
            }
            return this.articleFactory.buildOne(result);
        });
    }
}

module.exports = ArticleRepository;