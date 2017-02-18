const mime    = require('mime-types');
const md5     = require('md5');
const rand    = require('randomstring');
const uniquid = require('uniqid');

module.exports.getUploadUrl = function *() {
    try {
        const s3        = new this.aws.S3();
        const fileType  = mime.extension(this.request.query['file_type']);
        const fileName  = `${md5(uniquid(rand.generate()))}.${fileType}`;
        const params    = {
            Bucket     : this.config.s3_service.bucket_name,
            Key        : fileName,
            Expires    : 60,
            ContentType: fileType,
            ACL        : 'public-read-write',
        };
        const urlUpload = yield new Promise((resolve, reject) => s3.getSignedUrl('putObject', params, (err, data) => err ? reject(err) : resolve(data)));
        this.body       = {urlUpload: urlUpload, url: `${this.config.s3_service.s3_path}/${fileName}`};
    } catch (e) {
        this.status = 400;
        this.body   = e;
    }
};