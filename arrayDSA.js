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
// console.log(proArr([1, 2, 3, 4, 5], 5))




//Algorrithm
//Linear Search TimeComplexity O(n)
let arra = [1, 2, 3, 4, -5, 6, 7, 8]
const LinearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1
}
// console.log(LinearSearch(arra, 6))
// console.log(arra.includes(6))
// console.log(arra.indexOf(7))
// console.log(arra.find((num) => num < 0))


//Binary Search  TimeComplexity log(n)=k

const BinarySearch = (arr, target) => {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1
}


//Binary search using recursion
const BinaryRecursion = (arr, target) => {
    return BinaryRecurUtility(arr, target, 0, arr.length - 1)
}
const BinaryRecurUtility = (arr, target, left, right) => {

    if (left > right) return -1

    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
        return mid;
    }
    else if (arr[mid] < target) {
        // left = mid + 1;
        return BinaryRecurUtility(arr, target, mid + 1, right)
    }
    else {
        // right = mid - 1;
        return BinaryRecurUtility(arr, target, left, mid - 1)
    }

}
// console.log(BinaryRecursion([1, 2, 3, 4, 5, 6, 7, 9], 9))


//floor -> greatest integers of smaller than x   9-8
//ceil->smallest integers of greater than x  9-10
const CeilFloor = (arr1, target) => {
    let left = 0, right = arr1.length - 1;
    let ceilValue = -1, floorValue = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr1[mid] === target) {
            ceilValue = mid;
            floorValue = mid
            return [ceilValue, floorValue]
        }
        else if (arr1[mid] > target) {
            ceilValue = mid
            right = mid - 1
        }
        else {
            floorValue = mid
            left = mid + 1
        }
    }
    return [ceilValue, floorValue]
}

// const arr1 = [1, 2, 4, 5, 7, 8, 10];
// const target = 6;
// console.log(CeilFloor(arr, target));


//object 
const person = {
    name: 'ali',
    'last name': 'nayan',//property
    isPopular: true,
    lead: {
        lead: 'frontend developer'
    },
    walk: () => {
        return 'start walking'//method
    },
    run: function () {
        return 'start running'
    },
    arr: [1, 2, 3, 5, 7]
}
//In object every key must be string but value can be any datatype
// console.log(person['last name'])

// console.log(person.hasOwnProperty('isPopular'))//check the key is present
// console.log(person.walk())
//update value
person.name = 'Hossain'
// console.log(person.name)
//add
person.location = 'dhaka'
// console.log(person.location)

//delete
delete person.location
// console.log(person)


//shallow copy changes main object property
const person2 = person;
person2["last name"] = 'Max'
// console.log(person)
// console.log(person2)

// deep copy not changes the original object it create new object memeory
const person3 = Object.assign({}, person)//first { } is the new object that i will create second one is target where i get the data
person3['last name'] = 'Jeri'
// console.log(person)
// console.log(person3)
// console.log(Object.isFrozen(person))

//difference between freeze and seal method
//after freeze you cant add,delete,update any key values but in seal you can only update the key values
// Object.freeze(person)
person.isPopular = 'false'
delete person.name
// console.log(person)

//seal
Object.seal(person)
// console.log(Object.isSealed(person))

person.isPopular = false
// console.log(person)

//  console.log (Object.keys(person))
//  console.log (Object.values(person))
//  console.log (Object.entries(person))


//loop in objects
for (let key in person) {
    // console.log(key)
}


for (let key in person) {
    // console.log(person[key])
}
for (let key in person) {
    // console.log(key + ':',person[key])
}

Object.keys(person).forEach((key) => console.log(key))




//compare object
// console.log(Object.is(person,person2))

// let flag = false;
for (let key in person) {
    if (person[key] === person3[key]) {
        // console.log('they are same')
    } else {
        // console.log('they are not same')
    }
}
// if(flag!==true){
//     console.log('they are not same')
// }


//find count all the players
const data = {
    id: 1,
    name: ["P1", "P4"],
    next: {
        id: 2,
        name: ["P3"],
        next: {
            id: 3,
            name: ["P3", "P4", "P5"],
            next: {
                id: 4,
                name: ["P1", "P2", "P4"],
                next: {
                    id: 5,
                    name: ["P2", "P3", "P5"],
                    next: null
                }
            }
        }
    }
};

const dataRecursion = (data) => {
    if (data === null) return {}
    let count = {}
    for (let i of data.name) {
        count[i] = (count[i] || 0) + 1;
    }

    let nextCount = dataRecursion(data.next)

    for (let i in nextCount) {
        count = (count[i] || 0) + nextCount[i]
    }
    return count;
}



const CountPlayer = (data) => {
    if (data === null) return {}


    let count = {}
    for (let player of data.name) {
        count[player] = (count[player] || 0) + 1;
    }
    let nextCountPlayer = CountPlayer(data.next)

    for (let key in nextCountPlayer) {
        count[key] = (count[key] || 0) + nextCountPlayer[key];
    }
    return count;
}
console.log(CountPlayer(data))// {p1: 2, p4: 3, p3: 3, p2: 2: p5: 2}


//sorting
const arrSort = [1, -2, 66, -9, 777]
// console.log(arrSort.length)
// console.log(arrSort.sort())
// console.log(arrSort.sort((a, b) => a - b))//asscending
// console.log(arrSort.sort((a, b) => b - a))//descending

//string sort
const strSort = 'Bateman'
// console.log(sort(strSort())//not working
// console.log(strSort.split('').sort().join(''))//Its right
// -2,1,

//Bubble sort always compare adjacent element of an array
const BubbleSort = (arrSort) => {
    let swap = true
    do {
        swap = false;
        for (let i = 0; i < arrSort.length - 1; i++) {
            if (arrSort[i] > arrSort[i + 1]) {
                let temp = arrSort[i];
                arrSort[i] = arrSort[i + 1];
                arrSort[i + 1] = temp;
                swap = true;

                // [arrSort[i], arrSort[i + 1] = arrSort[i + 1], arrSort[i]]
            }
        }
    } while (swap);
    return arrSort;
}
// console.log(BubbleSort(arrSort))

//Selection Sort

const SelectionSort = (arrSort) => {
    for (let i = 0; i < arrSort.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arrSort.lenght; j++) {
            if (arrSort[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arrSort[minIndex], arrSort[i] = arrSort[i], arrSort[minIndex]]
        }
    }
    return arrSort;
}

