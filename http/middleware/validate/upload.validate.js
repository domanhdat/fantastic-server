"use strict";

module.exports.createUrl = (context) => {
    context.checkQuery('file_type').notEmpty().trim();
    return context;
};
