/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    return MergeSort(nums)
};

const MergeSort = (arra) => {
    if (arra.length < 2) {
        return arra;
    }
    let mid = Math.floor(arra.length / 2)
    let left = MergeSort(arra.slice(0, mid))
    let right = MergeSort(arra.slice(mid))
    return Merge(left, right)
}
const Merge = (left, right) => {
    let leftIndex = 0, rightIndex = 0
    let Sorted = []
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            Sorted.push(left[leftIndex])
            leftIndex++;
        } else {
            Sorted.push(right[rightIndex])
            rightIndex++;
        }
    }
    while (leftIndex < left.length) {
        Sorted.push(left[leftIndex])
        leftIndex++;
    }
    while (rightIndex < right.length) {
        Sorted.push(right[rightIndex])
        rightIndex++;
    }
    return Sorted
}