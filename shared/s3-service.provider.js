const aws = require('aws-sdk');

module.exports = function *(next) {
    aws.config.update({
        region          : this.config.s3_service.region,
        apiVersion      : this.config.s3_service.api_version,
        accessKeyId     : this.config.s3_service.access_key_id,
        secretAccessKey : this.config.s3_service.secret_access_key,
        signatureVersion: this.config.s3_service.signature_version
    });
    this.aws = aws;
    yield next;
};