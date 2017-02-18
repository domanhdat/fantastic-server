const uploadValidate = require('./validate/upload.validate');

module.exports.createUploadUrlValidate = function *(next) {
    uploadValidate.createUrl(this);
    if (this.errors) {
        this.status = 400;
        this.body   = this.errors;
        return;
    }
    yield next;
};