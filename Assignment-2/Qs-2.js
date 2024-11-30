// Qs-2 --> Take the user's name and  age as input using prompts. then turn return back the following statement to the user as an alert(by substituting their name and age).

// name is age years old. 
// [Use template literals to print this sentence]


let username = prompt("Enter your username :");
let age = prompt("Enter your age :");

// let msg =username+" "+"is"+" "+age+" "+"years"+" "+"old.";

alert(`${username} is ${age} years old.`);