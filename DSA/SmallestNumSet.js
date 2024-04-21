
var SmallestInfiniteSet = function () {
    this.set = new Set()
    this.minHeap = new MinPriorityQueue()
    this.minValue = 1
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
    if (this.set.size === 0) {
        return this.minValue++;
    }
    else {
        let value = this.minHeap.front().element;
        this.minHeap.dequeue()
        this.set.delete(value)
        return value;
    }
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
    if (this.set.has(num) || this.minValue <= num) {
        return
    } else {
        this.set.add(num)
        this.minHeap.enqueue(num)
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */