/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0 || n === 1) {
        return n;
    }

    let prev = 0;
    let current = 1;
    let next;
    for (let i = 2; i <= n; i++) {
        next = prev + current;
        prev = current;
        current = next;
    }
    return next;
};