"use strict";

const Article = require('./article');

class ArticleFactory {
    
    constructor() {
    }
    
    /**
     *
     * @param rawData
     * @returns {Article}
     */
    buildOne(rawData = {}) {
        return new Article()
            .setId(rawData['_id'])
            .setContent(rawData['content'])
            ;
    }
}

module.exports = ArticleFactory;