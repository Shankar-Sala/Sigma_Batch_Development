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

//even numbers...................................

// for(let i=2; i<=10; i=i+2){
//   console.log(i);
// }

// console.log("backward");

// for(let i=10; i>=2; i=i-2){
//   console.log(i);
// }


// infinite loop...............................
// for(let i=1; i>=0; i++){
//   console.log(i);
// }


// print the multiplication table for 5..............
// for(let i=5; i<=50;i=i+5){
//   console.log(i);
// }

// let n = prompt("Enter your number");
//  n = parseInt(n); //The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN . If not NaN , the return value will be the integer that is the first argument taken as a number in the specified radix .

// for(let i=n; i<=n*10;i=i+n){
//   console.log(i);
// }

// Nested for loop ..........................

// for(i=1;i<=3;i++){
//   console.log(`outer loop ${i}`)
//   for(let j=1;j<=3;j++){
//     console.log(j);
//   }
// }


// while loop ...............................
// let i = 1;
// while(i <= 5){
//   console.log(i);
//   i++;
// }

// console.log("backward");
// i=5;
// while(i>=1){
//   console.log(i);
//   i--;
// }


// break keyword 
// let i = 1;
// while(i<=5){
//   if(i == 3){
//     break;
//   }
//   console.log(i);
//   i++;
// }


// Loops with break 

// let fruits = ["mango","apple","banana","litchi","orange"];
// fruits.push("pineapple");
// for (let i=0; i<fruits.length; i++){
//   console.log(i, fruits[i]);
// }


// for(i=fruits.length-1; i>=0; i--){
//   console.log(i,fruits[i]);
// }



//loops with nested arrays

// let heroes = [
//   ['ironman', 'spiderman', 'thor'],
//   ['superman', 'wonder women', 'flash']
// ]

// for (let i = 0; i < heroes.length; i++) {
//   console.log(i, heroes[1], heroes[i].length);
//   for (let j = 0; j < heroes[i].length; j++) {
//    console.log(`j=${j}, ${heroes[i][j]}`);
//   }
// }


// let student = [["aman", 95],["shradha",94.4],["karan",100]];

// for(let i=0; i<student.length;i++){
//   console.log(`info of student #${i+1}`);
//   for(let j=0; j<student[i].length;j++){
//   console.log(student[i][j]);
//   }
// }

// for of loop
// let fruits=["mango","apple","banana","litchi","orange"];

// for(fruit of fruits){
//   console.log(fruit);
// }

// for(char of "shakar sala"){
//   console.log(char)
// }

// nested for of loop 
let heroes = [
  ['ironman', 'spiderman', 'thor'],
  ['superman', 'wonder women', 'flash']
]

for(list of heroes){
  for(hero of list){
    console.log(hero);
  }
}


