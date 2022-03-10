function getSecondLargest(nums) {
    const uniqueArr = (arr) => [...new Set(arr)]
    const uniqueNums = uniqueArr(nums);
    uniqueNums.sort(function (a, b) {
        return a - b;
    })
    return uniqueNums[uniqueNums.length - 2]
    // Complete the function
}
console.log(getSecondLargest([2, 3, 6, 6, 5]))