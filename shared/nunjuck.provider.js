"use strict";

const KoajsNunjucks = require('koajs-nunjucks');
const fMiddleware   = KoajsNunjucks(__dirname + '/../views', {});

module.exports = fMiddleware;
