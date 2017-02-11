"use strict";

module.exports.createArticle = (context) => {
    context.checkBody('content').notEmpty("content must be require");
    context.checkBody('images').optional();
    context.checkBody('hash').optional();
    
    return context;
};