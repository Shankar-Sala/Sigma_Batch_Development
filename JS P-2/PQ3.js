// PQ3  (1)---> A "good string" is a string that starts with the letter 'a' & has a length > 3. Write a Program to find if a string is good or not. 
// solution 

let string = "apple";

if ((string[0] === 'a') && (string.length > 3)) {
    console.log("Good String");
} else {
    console.log("Not a good string");
}

// PQ3 (2) Predict the output of the following code :

let num = 12;
if ((num % 3 == 0) && ((num + 1 == 15) || (num - 1 == 11))) {
    console.log("Safe");
} else {
    console.log("unsafe");
}