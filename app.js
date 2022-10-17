//숫자열 소팅
const numbers = [1, 5, 3, 4, 7, 9, 11, 33, 44, 32];

numbers.sort((a, b) => {
    return a-b;
});
numbers.pop();
numbers.shift();
 
const sumArray = numbers.reduce(function add(sum, currValue){
    return sum + currValue;
}, 0);

numbers.length <= 1 
? console.log(0)
: console.log(sumArray);


//문자열 소팅
// const animals = [
//     { name: 'monkey', size: 'medium', weight: 7 },
//     { name: 'cat', size: 'small', weight: 5 },
//     { name: 'lion', size: 'big', weight: 30 },
//     { name: 'mouse', size: 'small', weight: 3 },
//     { name: 'dog', size: 'medium', weight: 7 },
// ];

// animals.sort((a, b) => {
//     return a.name < b.name ? 1 : -1;
// });

// console.log(animals)

// function sumArray(array) {
//     if (!array || array.length <= 1){
//       return 0
//     } else {
//       array.sort((a, b) => {
//       return a-b;
//     });
//       array.pop();
//       array.shift();
  
//       const sumArray = array.reduce(function add(sum, currValue){
//           return sum + currValue;
//       }, 0);
//       return sumArray;
//     }
//   }
  