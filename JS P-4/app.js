// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// for loop

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for(let i = 5; i>=1 ; i--){
//   console.log(i);
// }

//odd Number

// for(let i=1; i<=15; i=i+2){
//   console.log(i);
// }

// console.log("backward");

// for(let i=15; i>=1; i=i-2){
//   console.log(i);
// }

//even numbers

// for(let i=2; i<=10; i=i+2){
//   console.log(i);
// }

// console.log("backward");

// for(let i=10; i>=2; i=i-2){
//   console.log(i);
// }


// infinite loop
// for(let i=1; i>=0; i++){
//   console.log(i);
// }


// print the multiplication table for 5.
// for(let i=5; i<=50;i=i+5){
//   console.log(i);
// }

let n = prompt("Enter your number");
 n = parseInt(n); //The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN . If not NaN , the return value will be the integer that is the first argument taken as a number in the specified radix .

for(let i=n; i<=n*10;i=i+n){
  console.log(i);
}


