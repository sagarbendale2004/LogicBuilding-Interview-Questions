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

// 11. write a function that takes a number as input and return the sum of its digits.

// function sumOfDigits(num) {
//     let number = Array.from(String(num), Number);
//     return number.reduce((prev, curr) => prev += curr);
// }

// console.log(sumOfDigits(9232));

//----------------------------------------------------------------------------------------------------------------------------------------

// 12. write a function that takes an array of an integers as input and removes any duplicate elements, returning a new array with only the unique elements.

// function removeDuplicates(arr) {
//     let arr1 = new Set([...arr]);
//     return arr1
// }

// console.log(removeDuplicates([1,2,3,4,4,53,3,6]));

//----------------------------------------------------------------------------------------------------------------------------------------

// 13. write a function that takes a string as input and returns the count of vovels in that string. consider 'a','e','i','o','u'.

// function countVovels(str) {
//     let count = 0;
//     let vovels = ['a','e','i','o','u'];
//     let cleanStr = str.split('');
//     cleanStr.forEach(elem => {
//         if(vovels.includes(elem)) {
//             count++;
//         }
//     });
//     return count;
// }

// console.log(countVovels('hello world'))

//----------------------------------------------------------------------------------------------------------------------------------------

// 14. write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two ,and false otherwise.

// function isPowerOfTwo(num) {
//     let opt = false;
//     for (let i = 0; i < num; i++) {
//         if(2**i === num){
//             opt = true
//         }
//     }
//     return opt;
// }

// console.log(isPowerOfTwo(64));

//----------------------------------------------------------------------------------------------------------------------------------------

// 15. write a function to calculate the sum of squares of all elements in an array. for example, given the array [1,3,4] the function should return 26 bcz 1*1, 3*3, 4*4 = 1 + 9 + 16 = 26.


// function sumOfSquare(arr) {
//     return arr.reduce((prev, curr) => prev += curr*curr);
// }

// OR

// function sumOfSquare(arr) {
//     let total = 0
//     let arr2 = [];
//     arr.map((elem) => {
//        return arr2.push(elem*elem);
//     })
//     arr2.forEach((elem) => {
//         total += elem
//     })
//     return total
// }

//console.log(sumOfSquare([1,2,3,4,5,6])); 

//----------------------------------------------------------------------------------------------------------------------------------------

// 16. write a function to findMin that takes an array of numbers as input and returns the minimunm value found in an array.

// function findMin(arr) {
//     return arr.reduce((prev, curr) => {
//        return prev < curr ? prev:curr;
//     })
// }

// console.log(findMin([5,13,78,55,87,65,122,63]));


// for finding Maximum from an array
// function findMin(arr) {
//     return arr.reduce((prev, curr) => {
//        return prev > curr ? prev:curr;
//     })
// }

// console.log(findMin([5,13,78,55,87,65,122,63]));

//----------------------------------------------------------------------------------------------------------------------------------------

// 17. write a function to convert a string to camelCase or snake_case.

// function camelCaseString(str) {
//     arr = str.split(' ');
//     arr1 = arr.map((elem, index) => {
//         if(index == 0){
//             return elem;
//         }
//         else {
//             return elem.charAt(0).toUpperCase() + elem.slice(1, elem.length);
//         }
//     })
//     return arr1.join('');
// }
// console.log(camelCaseString('hello world sagar'));


// function snake_case_string(str) {
//     return str.split(' ').join('_') 
// }

// console.log(snake_case_string('hello world sagar'));

//----------------------------------------------------------------------------------------------------------------------------------------

// 18. write a function to check given character is lowercase or uppercase.

// function isUpperCase(char) {
//    return char.toUpperCase() === char ? true:false;
// }
// console.log(isUpperCase('s')); //false


// function isLowerCase(char) {
//     return char.toLowerCase() === char ? true:false;
// }
// console.log(isLowerCase('d')); // true

//----------------------------------------------------------------------------------------------------------------------------------------

// 19. write a function to check weather given string is strats with a specific substring.

// function checkStarts(str, subStr) {
//     let arr = str.split(' ');
//     return arr[0] === subStr ? true : false;

// //OR

//     return str.slice(0, subStr.length) === subStr.toLowerCase();
// }

// console.log(checkStarts('hello world sagar', 'hello')); //true
// console.log(checkStarts('my name is sagar', 'name'));  //false

//----------------------------------------------------------------------------------------------------------------------------------------

// 20. write a function to reverse a string without using any inbuilt method or libraries.

// function reverseStr(str) {
//     let revStr = '';
//     for (let i = str.length-1; i >= 0; i--) {
//         revStr += str[i]
//     }
//     return revStr
// }

// console.log(reverseStr('hello'));

//----------------------------------------------------------------------------------------------------------------------------------------

// 21. write a function called calculateMean that must take an array of numbers as input and returns the mean Average of that numbers.

// function calculateMean(arr) {
//     let sum =  arr.reduce((prev, curr) => prev + curr)
//     return sum / arr.length;
// }

// console.log(calculateMean([1,2,3,4,5]));  //basically Mean means center value - 3
// console.log(calculateMean([10,20,30,40,50,60,70]));  // 40
// console.log(calculateMean([10,20]));  

//----------------------------------------------------------------------------------------------------------------------------------------

// 22. write a javascript function to find median that takes an array as an input and returns the median value . if the array has even number of elements, return the average of two middle values.

// function findMedian(arr) {
//     let arrSort = arr.sort((a,b) => a-b);
//     let med = Math.floor(arrSort.length / 2)
//     return arrSort.length % 2 === 0 ? (arr[med] + arr[med-1]) / 2 : arr[med];
// }

// console.log(findMedian([2,3,5,7,8,9,4])); // 5 bcz we sort array [2,3,4,5,7,8,9]
// console.log(findMedian([2,4,6,8])); //5

//----------------------------------------------------------------------------------------------------------------------------------------

// 23. write a javascript function to count the occurances of each element in an array and store the counts in an objects.the keys of the object  should represent the elements of the array , and the value should represents the number of times each element appears in the array.

// function countOccurance(arr) {
//     let obj = {}
//     arr.forEach(elem => {
//         obj[elem] = (obj[elem] || 0) + 1;
//     });
//     return obj
// }

// console.log(countOccurance([1,1,1,2,3,4,55,4,7])); // { '1': 3, '2': 1, '3': 1, '4': 2, '7': 1, '55': 1 }

//----------------------------------------------------------------------------------------------------------------------------------------

// 24. write a function called find mode that takes an array of numbers as input and return the mode of the array (the no. that apperas more frequently)

// function findMode(arr) {
//     let obj = {}
//     let maxNum = 0
//     let mode;
//     let sortArr = arr.sort((a,b) => a-b)
//     sortArr.forEach(elem => {
//         obj[elem] = (obj[elem] || 0) + 1;
//         if(obj[elem] > maxNum) {
//             maxNum = obj[elem]
//             mode = elem
//         }
//     });
//     return mode
    
// }         

// console.log(findMode([1,1,4,5,1,7,2])); //2
