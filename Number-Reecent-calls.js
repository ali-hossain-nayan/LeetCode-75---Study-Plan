
var RecentCounter = function() {
    this.request = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.request.push(t)
    let compliment = t - 3000;
    let count = 0
    for(let i = this.request.length-1;i>=0;i--){
        if(this.request[i]>=compliment){
            count++;
        }else{
            break;
        }
    }
    return count;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */