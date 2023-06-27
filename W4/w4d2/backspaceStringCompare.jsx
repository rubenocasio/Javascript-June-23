/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  
  # character means a backspace character.
  i.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(S, T) {

  function processBackSpaces(str){
    const stack = []

    for(let i = 0; i < str.length; i++){
      if(str[i] !== '#'){
        const myPush = str[i]
        // console.log(myPush)
        stack.push(str[i])
      } else if (stack.length !== 0){
        // console.log(stack)
        stack.pop()
      }
    }
    return stack.join('')
    // console.log(stack)
  }

  return processBackSpaces(S) === processBackSpaces(T)
}
console.log(backspaceStringCompare(S1,T1))
console.log(backspaceStringCompare(S2,T2))
console.log(backspaceStringCompare(S3,T3))
console.log(backspaceStringCompare(S4,T4))


/*****************************************************************************/

module.exports = { backspaceStringCompare };
