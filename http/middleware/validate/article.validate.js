"use strict";

module.exports.createArticle = (context) => {
    context.checkBody('content').notEmpty().trim();
    context.checkBody('images').optional().default([]);
    context.checkBody('hashTags').optional().default([]);
    context.checkBody('likeCount').optional().default(0).eq(0);
    context.checkBody('commentCount').optional().default(0).eq(0);
    context.checkBody('shareCount').optional().default(0).eq(0);
    context.checkBody('contentLink').optional().isUrl();
    return context;
};

module.exports.updateArticle = (context) => {
    context.checkBody('id').notEmpty().trim();
    context.checkBody('content').notEmpty().trim();
    context.checkBody('images').optional().default([]);
    context.checkBody('hashTags').optional().default([]);
    context.checkBody('likeCount').optional().default(0).eq(0);
    context.checkBody('commentCount').optional().default(0).eq(0);
    context.checkBody('shareCount').optional().default(0).eq(0);
    context.checkBody('contentLink').optional().isUrl();
    return context;
};