module.exports.createArticleValidate = function *() {
    
    this.checkBody('content').notEmpty("content must be require");
    this.checkBody('images').optional();
    this.checkBody('hash').optional();
    //empty() mean this param can be a empty string.
    this.checkBody('nick').optional().empty().len(3, 20);
    
};