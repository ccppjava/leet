/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.hash = {};
    this.queue = [];
    this.size = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.hash[key] !== undefined) {
        var value = this.hash[key];
        // console.log(key, this.queue, this.hash, '*')
        var index = this.queue.indexOf(key);
        if (index !== this.queue.length - 1) {
            this.queue.push(this.queue.splice(index, 1)[0]);
        }
        // console.log(key, this.queue, this.hash, '***');
        return value;
    }
    
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.hash[key] !== undefined) {
        this.hash[key] = value;
        var index = this.queue.indexOf(key);
        if (index !== this.queue.length - 1) {
            this.queue.push(this.queue.splice(index, 1)[0]);
        }
    } else {
        if (this.size === this.queue.length) {
            var oldKey = this.queue.shift();
            delete this.hash[oldKey];
        }
        this.hash[key] = value;
        this.queue.push(key);
    }
    // console.log(key, value, this.queue, this.hash);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */