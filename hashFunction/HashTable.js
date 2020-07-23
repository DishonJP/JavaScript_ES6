class HashTable {
    constructor() {
        this.bucket = [];
    }

    hash(data) {
        return data % 11;
    }

    set(value) {
        const index = this.hash(value);

        if (this.bucket[index] !== undefined) {
            this.bucket[index]=[...this.bucket[index],value]
            return null;
        }
        this.bucket[index] = [value];
    }

    get(key) {
        const index = this.hash(key);
        return this.bucket[index];
    }
}

module.exports = HashTable