// Qs2. Write a JavaScript program to get the last n elements of an array.
// [n can be any positive number].
// Forexample:for array [7,9,0,-2] and n=3 Print ,[9,0,-2]

let number = [3, 4, 5, 7,8];
let n  = 3;
let array =number.slice(number.length-n);
console.log(array);