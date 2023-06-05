/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
const bubbleSort = (nums) => {
    // Initialize a flag to track if the array is sorted
    let isSorted = false;

    // Keep looping until the array is sorted
    while (!isSorted) {
        // Assume the array is sorted at the beginning of each iteration
        isSorted = true;
        // Iterate through the array, comparing adjacent elements
        for (let i = 0; i < nums.length - 1; i++) {
            // If the current element is greater than the next one, swap them
            if (nums[i] > nums[i + 1]) {
                // Use array destructuring to swap the elements in a concise and readable way
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
                // Since we had to swap elements, set isSorted to false to indicate the array may not be fully sorted yet
                isSorted = false;
            }
        }
    }
    // After the while loop has completed, the array is sorted; return the sorted array
    return nums;
}

const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(bubbleSort(numsRandomOrder));


const bubbleSort2 = (nums) => {
    const len = nums.length;
  
    for (let i = 0; i < len - 1; i++) {

      // Last i elements are already in place
      for (let j = 0; j < len - i - 1; j++) {

        // Compare adjacent elements
        if (nums[j] > nums[j + 1]) {

          // Swap if the left element is larger than the right element
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        }
      }
    }
    return nums;
  };
  
  const numsRandomOrder2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
  console.log(bubbleSort2(numsRandomOrder));

  module.exports = { bubbleSort, bubbleSort2 };