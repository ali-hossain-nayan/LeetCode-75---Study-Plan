const arr = [2, 4, 'nayan', { name: 'ali' }, false]

// const lastElement = console.log(arr[arr.length-1])
//first insert and delete
// console.log(arr.shift())
// console.log(arr.unshift())

//last push and pop
// console.log(arr.push(7))
// console.log(arr.pop())

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
}

arr.forEach((i) => {
    // console.log(i)
})

for (let i of arr) {
    // console.log(i)
}
// console.log(arr)
//delete,add,update element using splice

// arr.splice(1,3)
// console.log(arr)



// arr.splice(1, 0, 6, 7, 8)
// console.log(arr)

// arr.splice(1,3,0,9,8)
// console.log(arr)
// console.log(arr)

//not changes main array 
// const arrsli = arr.slice(1,3)
// console.log(arrsli)
// console.log(arr)

//changes main array
// const arrspli = arr.splice(1,3)
// console.log(arrspli)
// console.log(arr)

//shallow copy changes in main array. it's not good practice
// console.log(arr)
// const arr1 = arr;
// arr1.splice(1,3)
// console.log(arr)

//deep copy not changes in main array.different ways we can do it
// console.log(arr)
const arr2 = [...arr]
const arr3 = Array.from(arr)
const arr4 = arr.concat()
arr3.splice(1, 3)
// console.log(arr3)
// console.log(arr)

const arrA = [4, -4, 1, 2, 4, 7, 8]
//sorting ascending
const sortArr = arrA.sort()
// console.log(sortArr)
//descending
const desortArr = arrA.sort((a, b) => b - a)
// console.log(desortArr)

//map return new array
const newMap = arrA.map((ele, index) => ele * ele)
// console.log(newMap)

//filter return new array but in codition
const newFilter = arrA.filter((ele, index) => ele > 0)
// console.log(newFilter)

//reduce return a number usually sum of array
const newReduce = arrA.reduce((acc, cul) => acc + cul, 0)
// console.log(newReduce)

//flat
const ar = [2, -3, -4, [3, 6, 7, [3, 4, 7]]]
const FlatArray = ar.flat(3)//for all depth we can use Infinity.
// console.log(FlatArray)
//filter vs find
//filter find all element that will match its condition but find is work only for first element 
//if its find the first element with condition and return it not check rest of the array.
const positiveInt = ar.find((ele) => ele > 0)
// console.log(positiveInt)


//string

const DcHeros = 'Superman'
//accessing the char in string
// console.log(DcHeros.charAt(4))
// console.log(DcHeros[4])
// console.log(DcHeros.charCodeAt('e'))//aschi value
// console.log(DcHeros.includes('m'))
// console.log(DcHeros.indexOf('m'))
const MarvelHeros = 'Batman'
// console.log(DcHeros.localeCompare(MarvelHeros))//compare two strings
//replace
let dev = 'Nayan is intermediate Frontend Developer . Nayan is also '
// console.log(dev.replace('Nayan','Linus Trovald'))//it will replace only first occurece
//for the all occurcence of Nayan change to 
// console.log(dev.replaceAll('Nayan','Linus Trovald'))

//both are return substring but in slice we can use negative index
// console.log(dev.substring(5,30))
// console.log(dev.slice(-29,-2))

//return the array of substring with respect to the condition we apply '' or . or anything
// console.log(dev.split(' '))
const substr = dev.split(' ')
// console.log(substr.join(' '))


//convert number to string
const x = 245;
// console.log(x, x.toString())
let y = x.toString()
// console.log(y)
// console.log(typeof(y))
//obj convert
const obj = {
    name: 'ali',
    id: 35
}
// console.log(JSON.stringify(obj))

function abc() {
    // console.log()
}




//Recurssion
const fun = (n) => {
    console.log('fun', n)//maximum called is exceeded bcz the function run and run over again bcz of its called inside the function itself
    fun(n - 1)
}
// fun(10)

//solve with base case
const fun2 = (n) => {
    if (n === 0) {//if n reach 0 with return the function and that will solve our problem
        return;
    }
    console.log('fun2', n)
    fun2(n - 1)
}
// fun2(10)


//Factorial
const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
// console.log(factorial(4))

//sum of array:given a array return its element sums
const sumOfArray = (arr) => {
    if (arr.length === 0) {
        return 0
    }
    return arr[(arr.length - 1)] + sumOfArray(arr.slice(0, arr.length - 1))
}
// console.log(sumOfArray([1, 2, 3, 4, 5]))



//another approach
const sumArray = (arr) => {
    if (arr.length === 0) {
        return 0
    }
    let lastElement = arr.pop()
    return lastElement + sumArray(arr)
}
// console.log(sumArray([1, 2, 3, 4, 5]))
//another
const SumArray = (arr, n) => {
    if (n === 0) return 0
    return arr[n - 1] + SumArray(arr, n - 1)
}
// console.log(SumArray([1, 2, 3, 4, 5], 5))


//Product of array elements
const ProductArray = (arr) => {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return 1
    return arr[(arr.length - 1)] * ProductArray(arr.slice(0, arr.length - 1))
}
// console.log(ProductArray([1, 2, 3, 4, 5]))
// another
const proArr = (arr, n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let lastElement = arr.pop()
    return lastElement * proArr(arr, n - 1)
}
console.log(proArr([1, 2, 3, 4, 5], 5))




