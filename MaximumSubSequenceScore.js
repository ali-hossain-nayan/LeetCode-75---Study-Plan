/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    let total = 0, res = 0;
    let pairs = [];
    
    // Create pairs and push them into the pairs array
    for (let i = 0; i < nums1.length; i++) {
        pairs.push([nums1[i], nums2[i]]);
    }
    
    // Sort pairs in descending order based on nums2 values
    pairs.sort((a, b) => b[1] - a[1]);
    
    // Priority queue to store top k elements from nums1
    let pq = new MinPriorityQueue();
    
    for (let i = 0; i < pairs.length; i++) {
        let [num1, num2] = pairs[i];
        pq.enqueue(num1);
        total += num1;
        
        // Keep only top k elements in the priority queue
        if (pq.size() > k) {
            total -= pq.dequeue().element;
        }
        
        // If the priority queue is full (size == k), update the result
        if (pq.size() === k) {
            res = Math.max(res, total * num2);
        }
    }
    
    return res;
};
