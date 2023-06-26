/* 
    Given by Riot games. Rehash an incorrectly hashed string 
    by combining letter count occurrences and alphabetizing them.
*/

const str1 = "b70a164c32a20c10j3a15";
const expected1 = "a199b70c42j3";

/**
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    //Code block
}

console.log(rehash(str1));  // Output: "a199b70c42j3"
/*****************************************************************************/

module.exports = { rehash };