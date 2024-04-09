const palindrome = (n)=>{
    let copyNum = n;
    let reverseNum = 0;
    while(n>0){
        let lastDigit = copyNum%10;
        reverseNum = reverseNum*10 + lastDigit;
        copyNum =Math.floor( copyNum/10);

    }
    return n === reverseNum;

}
console.log(palindrome(121))