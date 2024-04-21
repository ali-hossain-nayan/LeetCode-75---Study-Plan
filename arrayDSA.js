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

for(let i of arr){
    // console.log(i)
}
// console.log(arr)
//delete,add,update element using splice

// arr.splice(1,3)
// console.log(arr)

// arr.splice(1,0,6,7,8)
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
console.log(arr)
const arr2 = [...arr]
const arr3 = [Array.from(arr)]
const arr4 = arr.concat()
console.log(arr2,arr3,arr4)






