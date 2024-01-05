// function countTrue(arr) {
//   let count = 0;

 
//   arr.forEach((e) => {
   
//     if (e === true) {
//       count++;
//     }
//   });

//   return count;
// }


// const arr1 = [true, false, false, true, false];
// console.log(countTrue(arr1)); // Output: 2

// const arr2 = [false, false, false, false];
// console.log(countTrue(arr2)); // Output: 0

// const arr3 = [];
// console.log(countTrue(arr3)); // Output: 0


// 2

// function add(num, length) {
//   const sum = [];


//   for (let i = 1; i <= length; i++) {
  
//     sum.push(num * i);
//   }

//   return sum;
// }


// console.log(add(7, 5));
// console.log(add(12, 10));



// 3

// function add(people) {
//   let ccc = "";
//   let sum = -Infinity;

//   for (let name in people) {
//     if (people[name] > sum) {
//       sum = people[name];
//       ccc = name;
//     }
//   }

//   return ccc;
// }

// const group1 = { Emma: 71, Jack: 45, Amy: 15, Ben: 29 };
// console.log(add(group1));

// 4

// function aad(num) {
//   const digits = String(num).split("");
//   const reversedDigits = digits.reverse();
//   const reversedArr = reversedDigits.map((digit) => parseInt(digit, 10));
//   return reversedArr;
// }

// // Example usage:
// console.log(aad(1485979));
// console.log(aad(623478));
// console.log(aad(12345));

// 5\
// function secondLargest(nums) {
//   let max = -Infinity;
//   let secondMax = -Infinity;

//


