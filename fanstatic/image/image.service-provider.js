"use strict";

const ImageFactory = require('./image.factory');

module.exports = function *(next) {
    this.imageFactory = new ImageFactory();
    yield next;
};
