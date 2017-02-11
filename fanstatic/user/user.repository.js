class UserRepository {
    
    /**
     *
     * @param collection
     */
    constructor(collection) {
        this.collection = collection;
    }
    
    /**
     *
     * @returns {Promise}
     */
    findAll() {
        return this.collection.find().toArray();
    }
    
    save(user) {
        return this.collection.insertOne(user);
    }
}

module.exports = UserRepository;