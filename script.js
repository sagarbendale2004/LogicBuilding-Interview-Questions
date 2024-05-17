// 1. Write a function to find longestword that takes a string as input and returns longest word in that string. if their are many similar longest words then returns first longestword.

// function longestword(str) {
//    let arr = str.split(' ');
//    return arr.reduce((prev, curr) => { 
//    return prev.length > curr.length ? prev:curr
//  });
// }
// console.log(longestword('my name is sagar rajesh bendale'));

// method 2 -

// function longestword(str) {
//    let arr = str.split(' ');
//    arr.sort((a,b) => b.length - a.length);
//    return arr[0];
// }
// console.log(longestword('my name is sagar rajesh bendale'));

//----------------------------------------------------------------------------------------------------------------------------------------

// 2. genrate a HashTag from given string and the first letter of all words should be capital  eg. 'sagarbendale' ==> #SagarBendale

// function genrateHashtag(str) {
//     let arr = str.split(" ");
//     let strArr = arr.map(elem => {
//         return elem.replace(elem[0], elem[0].toUpperCase());  // elem.chatAt(0).toUpperCase();
//     });
//     return `#${strArr.join('')}`;
// }
// console.log(genrateHashtag('virat kohli'));

//----------------------------------------------------------------------------------------------------------------------------------------

// 3. write a function called countChar that takes two parameters a string and character to count. the function should return the character count means how much time that character should be comes.

// function countChar(str,char) {
//     let count = 0;
//     let arr = str.split('');
//     arr.forEach(elem => {
//         if(elem === char){
//             count++;
//         }
//     });
//     return count;
// }

// console.log(countChar('my name is sagar','m'));

//----------------------------------------------------------------------------------------------------------------------------------------

// 4. write a function checktriangleType that takes three parameteres representing the length of the sides of the triangle.the function should return a string indicating type of triangle : 'equivalent' , 'isosceles' , 'scalene'

// function checkTriangleType(a,b,c) {
//     if(a==b && b==c){
//         return 'Equivalent'
//     }
//     else if(a==b || b==c || a==c) {
//         return 'Isosceles'
//     }
//     else {
//         return 'Scalene'
//     }
// }

// console.log(checkTriangleType(3,3,3)); // equivalent
// console.log(checkTriangleType(2,4,2)); //isosceles
// console.log(checkTriangleType(5,4,6)); //scalene

//----------------------------------------------------------------------------------------------------------------------------------------

// 5. write an function to sort an array into an ascending order.

// function sortAscending(arr) {
//     return arr.sort((a,b) => a-b);
// }
// console.log(sortAscending([12,32,53,43,26,8,6,65,4,5]));

//----------------------------------------------------------------------------------------------------------------------------------------

// 6. write a function to find given string is palindrome or not. A palindrome is a string, character or any sequence of character.

// function findPalindrome(str) {
//     let revStr = str.split('').reverse().join('');
//     return str.toLowerCase() === revStr.toLowerCase() ? 'Given string is Palindrome.' : 'Not Palindrome';
// } 
// console.log(findPalindrome('saas'));

//----------------------------------------------------------------------------------------------------------------------------------------

// 7. write a function to findMax that takes an array of numbers as input and returns the maximum number in the array.

// function findMax(arr) {
//     arr.sort((a,b) => b-a);
//     return arr[0];
// }

// console.log(findMax([1,7,5,4,3,2,71,8,-3,23]));

//----------------------------------------------------------------------------------------------------------------------------------------

// 8. write a function Factorial that takes a nonNegative integer num as input and returns its factorial.

// function Factorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     return fact
// }

// console.log(Factorial(5));

//----------------------------------------------------------------------------------------------------------------------------------------

// 9. write a function calculateAverage that takes an array of numbers as input and return the average of that numbers.

// function calculateAverage(arr) {
//     let count = 0;
//     arr.forEach(elem => {
//         count += elem;
//     });
//     return count / arr.length;
// }

// console.log(calculateAverage([5,2,3,15,4,1,19,15]));

//----------------------------------------------------------------------------------------------------------------------------------------

// 10. write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal.

// function arraysAreEqual(arr1, arr2) {
//     if(arr1.length != arr2.length) {
//         return false;
//     }
//    return arr1.every((currVal, index) => currVal == arr2[index]); 
// }

// console.log(arraysAreEqual([1,2,3,4,5], [1,2,3,4,5]));

//----------------------------------------------------------------------------------------------------------------------------------------

