const dataStore = new Map();

class InMemoryRepository {
    find(key) {
        return dataStore.get(key);
    }

    save(key, value) {
        dataStore.set(key, value);
    }
}

module.exports = new InMemoryRepository();
