

const arr = [1, 2, 3, 45, 7]
const FindElement = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}
console.log(FindElement(arr, 4))