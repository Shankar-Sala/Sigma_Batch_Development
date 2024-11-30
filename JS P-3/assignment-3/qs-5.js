// Qs5. Write a JavaScript program to strip leading ("Strip leading" means to remove characters from the beginning of a string) and trailing spaces (Trailing spaces are spaces that appear at the end of a file, folder, or text entry field) from a string.


let str = prompt("please enter a string");
console.log(`original string = ${str}`);
console.log(`string without spaces = ${str.trim()}`);