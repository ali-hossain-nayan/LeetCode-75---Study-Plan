
const sumNaturalNumber = (n) => {
    let ans = 0

    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;

    // return n*(n+1)/2
}
console.log(sumNaturalNumber(12))