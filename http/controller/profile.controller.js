"use strict";

module.exports.getProfile = function *(next) {
    try {
        this.body = yield this.profileRepo.getProfile(this.params.id);
    } catch (e) {
        this.throw(e, 500);
    }
};

module.exports.updateProfile = function *(next) {
    try {
        this.body = yield this.profileRepo.updateProfile(this.params.id, this.request.body);
    } catch (e) {
        this.throw(e, 500);
    }
};