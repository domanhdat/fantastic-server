"use strict";

const config = {
    s3_service: {
        region           : process.env['REGION'],
        s3_path          : process.env['S3_PATH'],
        api_version      : process.env['API_VERSION'],
        bucket_name      : process.env['BUCKET_NAME'],
        access_key_id    : process.env['ACCESS_KEY_ID'],
        secret_access_key: process.env['SECRET_ACCESS_KEY'],
        signature_version: process.env['SIGNATURE_VERSION']
    },
    database  : {
        mongodb: {
            host: process.env['DB_HOST'],
            port: process.env['DB_PORT'],
            db  : process.env['DB_NAME']
        }
    }
};

module.exports = config;