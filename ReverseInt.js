/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const MAX_INT = Math.pow(2, 31) - 1;
    const MIN_INT = -Math.pow(2, 31);
    let numberString = Math.abs(x).toString();

    let reversedString = numberString.split('').reverse().join('');

    let reversedNumber = parseInt(reversedString);
    if (reversedNumber > MAX_INT || reversedNumber < MIN_INT) {
        return 0;
    }
    reversedNumber = reversedNumber * Math.sign(x);

    return reversedNumber;
};