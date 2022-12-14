/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

// console.log(`\n-------------EXERCISE 1-------------`)

// function rectangle(length, width) {
//   return length * width
// }

// let area = rectangle(11, 12)

// console.log(area)

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

// console.log(`\n-------------EXERCISE 2-------------`)

// function crazySum(a, b) {
//   if (a === b) {
//     return (a + b) * 3
//   } else {
//     return a + b
//   }
// }

// console.log(crazySum(3, 3))

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

// console.log(`\n-------------EXERCISE 3-------------`)

// const fixedNumber = 19
// function crazyDiff(givenNumber, fixedNumber) {
//   if (givenNumber - fixedNumber > 19) {
//     return (givenNumber - fixedNumber) * 3
//   }
//   if (fixedNumber - givenNumber > 19) {
//     return (fixedNumber - givenNumber) * 3
//   } else {
//     console.log("absolute difference is not greater than 19")
//   }
// }

// crazyDiff(2, fixedNumber)

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

// console.log(`\n-------------EXERCISE 4-------------`)

// function boundary(n) {
//   if (n >= 20 && n <= 100) {
//     console.log(true)
//   } else if (n === 400) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }

// boundary(25)

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

// console.log(`\n-------------EXERCISE 5-------------`)

// let string
// function strivify(string) {
//   if (string === "Strive") {
//     console.log(string)
//   } else {
//     console.log("Strive" + string)
//   }
// }
// strivify("Aneesah")

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

console.log(`\n-------------EXERCISE 6-------------`)

function check3and7(n) {
  if (n % 3 === 0 && n % 7 === 0) {
    console.log(`${n} is a multiple of 3 and 7`)
  } else {
    console.log(`${n} is not multiple of 3 and 7`)
  }
}

// check3and7(22)

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
