/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.

    A multiset union is a combination of two multisets that includes all elements from both sets
    (arrays that can contain duplicate elements). In the case of duplicates,
    the union should have the maximum count of that element from either set.

    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top)
    https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

/* 
    Explanation: Every int from each set is included in the result, 
    for dupes, like 2, include it 3 times, because it occurs 3 times at most in ONE set
*/
const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
    // Create an empty array called union to store the final union
    const union = [];
    
    // Initialize two pointers, idxA and idxB, for iterating through both input arrays
    let idxA = 0;
    let idxB = 0;

    // Iterate through both input arrays until one of them reaches the end
    while (idxA < sortedA.length || idxB < sortedB.length) {
        // If idxA reaches the end of sortedA, push all remaining elements of sortedB into union
        if (idxA === sortedA.length) {
            union.push(sortedB[idxB++]);

        // continue is used inside the while loop to skip the remaining part of the loop's current iteration and move directly to the next iteration.
            continue;
        }

        // If idxB reaches the end of sortedB, push all remaining elements of sortedA into union
        else if (idxB === sortedB.length) {
            union.push(sortedA[idxA++]);
            continue;
        }

        // If the current elements in both arrays are equal, add the element to union
        // and move pointer to the next elements
        if (sortedA[idxA] === sortedB[idxB]) {
            union.push(sortedA[idxA++]);
            idxB++;
        } 
        // If the current element in sortedA is less than the current element in sortedB,
        // add the element from sortedA to union and move idxA to the next element
        else if (sortedA[idxA] < sortedB[idxB]) {
            union.push(sortedA[idxA++]);
        } 
        // If the current element in sortedA is greater than the current element in sortedB,
        // add the element from sortedB to union and move idxB to the next element
        else {
            union.push(sortedB[idxB++]);
        }
    }
    // Return the result array containing the ordered multiset union
    return union;
}

console.log(orderedMultisetUnion(nums1A, nums1B))
console.log(orderedMultisetUnion(nums2A, nums2B))

/*****************************************************************************/

module.exports = { orderedMultisetUnion };
