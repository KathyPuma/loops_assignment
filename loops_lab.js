
// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs
// all the numbers, descending, between "num" and 1.
//

// // let num = 15
// // while (num > 0){
// //   console.log(num)
// //   num -=1
// // }
// // //
// //
// // for (let num = 15; num > 0; num -=1)
// if (num % 2 !== 0 || num % 2 ==0){
// // console.log(num)
// // }



// 2. Write a `while` loop and a `for` loop that takes the variable "max", and
// iterates over all numbers from 0 to "max".
// For each iteration, it will check if the current number is even or odd, and log
// that to the screen (e.g. "2 is even")


// let max = 26
// while (max >= 0){
//   if (max % 2 == 0){
//   console.log(max + " "+ "is even")
// }else{
//   console.log(max + " " + "is odd")
// }
// max -=1
// }
//



// for (let max = 26; max >= 0; max -=1)
// if (max % 2 == 0){
// console.log(max + " "+ "is even")
// }else{
//   console.log(max+ " " + "is odd")
// }




//
// 3. Write a `while` loop and a `for` loop that takes the variable "x" and
// iterates over all numbers from 0 to "x".
// For each iteration of the loop, it will multiply the number of "x" by 9 and log
// the result (e.g. "2 * 9 = 18").
//   _Bonus_ think of another way to solve it.
//     <details>
//       <summary>
//         Hint
//       </summary>
//       Find the final number and increment the loop by 9.
//     </details>
//

//
// let num = 1
// while(num <= 36){
//   if (num % 9 == 0){
//     let x = num / 9
//     console.log(x + " " + "* 9 =" + " " + num)
//   }
//   num += 1
// }
//
//
//
//
//
// for (let num = 1; num <= 36; num +=1)
// if (num % 9 == 0){
//   let x = num / 9
// console.log(x + " " + "* 9 =" + " " + num)
// }
//


// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100,
// **exclusive**.

//
// let num = 1
// while (num <= 100){
//   if (num % 5 == 0 && num % 10 !== 0){
//   console.log(num)
// }
// num +=1
// }




// 5. Without running/executing your code, how many times will the loop below run?
//  Explain why.
//
// ```js
// let i = 5;
//
// while (i > 3) {
//     i += 1
// }
//
// // Your explanation here
// ```
//The loop will be never ending loop because the condition
//did not stop the loop but tells the computer to start from f and continue
//going as long as i >3.




// 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with
//  two exceptions. For numbers divisible by 3, log "Fizz" instead of the number,
//  and for numbers divisible by 5 (and not 3), log "Buzz" instead.


// let num = 1
// while (num <= 100){
// if ( num % 3 == 0){
//   console.log("Fizz")
// }else if(num % 5 == 0){
//   console.log("Buzz")
// }else{
//   console.log(num)
// }
// num +=1
// }




//
// 7. Modify your program to log "FizzBuzz", for numbers that are divisible by
// both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one
// of those).
//



// let num = 1
// while (num <= 100){
// if ( num % 3 == 0 && num % 5 == 0){
//   console.log("FizzBuzz")
// }else if(num % 3 == 0){
//   console.log("Fizz")
// }else if (num % 5 == 0){
//   console.log("Buzz")
// }else{
//   console.log(num)
// }
// num +=1
// }



// ### Bonus:
//
// 1. Write a program that would log the [lyrics of the song 99 Bottles of Beer]
// (http://www.99-bottles-of-beer.net/lyrics.html).
// This is the first verse of the song:
//
//   ```
//   99 bottles of beer on the wall, 99 bottles of beer.
//   Take one down, pass it around, 98 bottles of beer on the wall.
//   ```
//
//   This verse is repeated, each time with one less bottle, until the number of
//   bottles is 0. When the number of bottles is 2, the verse is:
//
//   ```
//   2 bottles of beer on the wall, 2 bottles of beer.
//   Take one down, pass it around, 1 bottle of beer on the wall.
//   ```
//
//   In the last line, the word bottles (plural), is replaced with bottle (singular)
//
//   When the number of bottles is 1, the verse is:
//
//   ```
//   1 bottle of beer on the wall, 1 bottle of beer.
//   Take one down, pass it around, No more bottle of beer on the wall.
//   ```
//

// let beers = 99
// while (beers >= 1){
//   if (beers >=3){
//     console.log(beers + " " + "bottles of beer on the wall," + " " + beers + " " + "bottles of beer on the wall. Take one down, pass it around," + " " + (beers-1) + " " + "bottles of beer on the wall." )
//   }else if (beers >= 2){
//     console.log(beers + " " + "bottles of beer on the wall," + " " + beers + " " + "bottles of beer on the wall. Take one down, pass it around," + " " + (beers-1) + " " + "bottle of beer on the wall.")
//   }else{
//     console.log(beers + " " + "bottle of beer on the wall," + " " + beers + " " + "bottle of beer on the wall. Take one down, pass it around, No more bottle of beer  on the wall.")
//   }
//   beers -= 1
// }







// ___
//
// 2. Use the `assignGrade` function (given below). Write a function that logs
//  each number from 60 - 100 along with its corresponding letter score.
// Exp For each number from 81 to 90, log B, like so:
//
// ```js
// 60 - F
// ...
// 81 - B
// 82 - B
// 83 - B
// ...
// 93 - A
// 94 - A
// ...
// ```
//
// ```js
// function assignGrade(score) {
//     if (score > 90) {
//         return 'A';
//     } else if (score > 80) {
//         return 'B';
//     } else if (score > 70) {
//         return 'C';
//     } else if (score > 65) {
//         return 'D';
//     } else {
//         return 'F';
//     };
// };
// ```
//
// let grade = 60
// while(grade <= 100){
//   if(grade >=90){
//   console.log(grade + " " + "-A")
// }else if(grade >= 80 && grade < 90){
//   console.log(grade + " " + "-B")
// }else if(grade >= 70 && grade < 80){
//   console.log(grade + " " + "-C")
// }else if(grade >= 60 && grade < 70){
//   console.log(grade + " " + "-D")
// }else{
//   console.log(grade + " " + "-F")
// }
// grade += 1
// }









//
// ___
//
// 3. Given an integer N draw a square of N x N asterisks. Look at the examples.
//
// Example 1:
// Input: `let N = 2`
//
// Output:
// ```js
// **
// **
// ```
//
// Example 2:
// Input: `let N = 3`
//
// Output:
// ```js
// ***
// ***
// ***
// ```
//
// <details>
//   <summary>
//     Hint 1
//   </summary>
//   Try printing/logging a single line of * first.
// </details>
//
// <details>
//   <summary>
//     Hint 2
//   </summary>
//   You will need 2 loops for this.
// </details>
