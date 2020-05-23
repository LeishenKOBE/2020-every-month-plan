class HashTable {
  constructor() {
    this.storage = [];
    this.count = 0;
    this.limit = 7;
  }
  hashFunc(str, size) {
    let hashCode = 0;
    for (let i = 0; i < str.length; i += 1) {
      hashCode = 37 * hashCode + str.charCodeAt(i);
    }

    let index = hashCode % size;
    return index;
  }
  put(key, value) {
    let index = this.hashFunc(key, this.limit);
    let bucket = this.storage[index];
    if (bucket == null) {
      bucket = [];
      this.storage[index] = bucket;
    }
    for (let i = 0; i < bucket.length; i += 1) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.count++;
  }
  get(key) {
    let index = this.hashFunc(key, this.limit);
    let bucket = this.storage[index];

    if (bucket == null) {
      return null;
    }

    for (let i = 0; i < bucket.length; i += 1) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
    return null;
  }
  remove(key) {
    let index = this.hashFunc(key, this.limit);
    let bucket = this.storage[index];

    if (bucket == null) {
      return null;
    }

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this.count--;
        return tuple[1];
      }
    }
    return null;
  }
  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  resize(newLimit) {
    let oldStorage = this.storage;
    this.storage = [];
    this.count = 0;
    this.limit = newLimit;

    for (let i = 0; i < oldStorage.length; i += 1) {
      let bucket = oldStorage[i];
      if (bucket == null) {
        continue;
      }
      for (let j = 0; j < bucket.length; j += 1) {
        let tuple = bucket[j];
        this.put(tuple[0], tuple[1]);
      }
    }
  }
}

let hash = new HashTable();

hash.put("abc", "123");
hash.put("aaa", "123");
hash.put("bbb", "123");
hash.put("ccc", "123");

console.log(hash.get("abc"));
