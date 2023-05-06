/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/


// Base case = if nums.length === 0  bcoz if array is empty return sorted beacuse there are no numbers to sort. so edge case is base case.
// recursive case = if the array is not empty, find the smallest number and add to the the array(sorted).
// Math.min(...nums) to find the smallest num & pull out from the array.
// pushed that num into sorted
// we splice the smallest num at indexOf nums
// recursive step = walk through the array, to get the smallest nums.
//  return the function again.



function sort(nums, sorted = []) {
    // Your code here
    if(nums.length === 0){
        return sorted;
    } else{

        let smallNum = Math.min(...nums)
        sorted.push(smallNum);
        nums.splice(nums.indexOf(smallNum),1);
        return sort(nums, sorted)

    }

}






console.log(sort([0, 1, -3])); // [-3, 0, 1]
console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sort;
