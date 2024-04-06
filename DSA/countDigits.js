
const countDigit = (n) => {
    n = Math.abs(n);

    let count = 0;
    do {
        count++
        n = Math.floor(n / 10)

    } while (n > 0);
    return count;
}
console.log(countDigit(123445))