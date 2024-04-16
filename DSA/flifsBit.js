/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        let x = (a >> i) & 1;
        let y = (b >> i) & 1;
        let z = (c >> i) & 1;

        if (z === 1) {
            if (x === 0 && y === 0) {

                count++;
            }
        }
        else {
            if (x === 1 && y === 1) {
                count += 2;
            }
            else if (x === 1 || y === 1) {
                count++;
            }
        }
    }
    return count;
};