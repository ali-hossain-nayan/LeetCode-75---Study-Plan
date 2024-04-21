const arr = [1, 2, 3, 4, 5, 6, 7]

const FindElementIndex = (arr, target) => {
    for (let index of arr) {
        if (target === arr[index]) {
            return index;
        }
    }
    return false;
}
console.log(FindElementIndex(arr, 4))