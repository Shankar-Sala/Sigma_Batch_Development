// Qs-1 --> for given string : let msg ="help!";   trim it and convert it to uppercase. 

//solution
// let msg ="help!";
// console.log(msg.trim().toUpperCase());

// Qs-2 --> For the string -> let name ="ApnaCollege", predict the output for the following:
// name.slice(4,9)
// name.indexOf("na")
// name.replace("Apna","Our")

//solution
// let username ="ApnaCollege";
// console.log(username.slice(4,9)); //Colle
// console.log(username.indexOf("na")); //2
// console.log(username.replace("Apna","Our")); //OurCollege

// Qs-3 --> Separate the "College" part in above string and replace "l" with "t" in it  

//solution
let username ="ApnaCollege";
console.log(username.slice(4,11).replace("l","t").replace("l","t"));