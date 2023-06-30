/* 
    Given an array of objects representing people, and a string representing a bad habit
    return a "santasNaughtyList" containing the first and last names of all the people who
    have the matching bad habit so that santa knows how much coal he needs.
    
    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const students = [
    {
        firstName: "Alex",
        lastName: "Miller",
        habits: ["doesn't wash dishes","falls asleep in lecture","shows up early"],
    },
    {
        firstName: "Martha",
        lastName: "Smith",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "Roger",
        lastName: "Anderson",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "Rick",
        lastName: "James",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["Alex Miller", "Roger Anderson"];

const badHabit2 = "shows up late";
const expected2 = ["Martha Smith", "Roger Anderson"];

const badHabit3 = "vapes too much";
const expected3 = [];

/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyList(persons, badHabit) {
    //Step 1
    const coalRecipients = [];
    //Step 2
    for(let i = 0; i < persons.length; i++){
        const person = persons[i]
        // console.log('This is person: ' + person.firstName + ' ' + person.lastName)
        // console.log('This is person: ' + person)
        //Loop through each habit of the current person
        for(let h = 0; h < person.habits.length; h++){
            const personsHabit = person.habits[h]
            // console.log("Inside our nested for loop: " + personsHabit)
            //Check if the current habit matches the badhabit
            if(personsHabit === badHabit){
                //If it matches, let's add the persons full name to the empty array (coalRecipients)
                coalRecipients.push(`${person.firstName} ${person.lastName}`)
                //break out of the inner loop since we found a match
                break;
            }
        }
    }
    return coalRecipients;
}
// console.log(santasNaughtyList(students, badHabit1))
// console.log(santasNaughtyList(students, badHabit2))
// console.log(santasNaughtyList(students, badHabit3))

/**
 * Finds a list of people whose habits contain the given bad habit. 
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
const santasNaughtyListFunctional = (persons, badHabit) => persons.filter((p) => p.habits.includes(badHabit)).map((p) => `${p.firstName} ${p.lastName}` )

console.log(santasNaughtyListFunctional(students, badHabit1))
console.log(santasNaughtyListFunctional(students, badHabit2))
console.log(santasNaughtyListFunctional(students, badHabit3))

/*****************************************************************************/


module.exports = {santasNaughtyList, santasNaughtyListFunctional};
