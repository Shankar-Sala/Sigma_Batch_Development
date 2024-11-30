// Qs 1. for the given start state of an Array, change it to final form using methods.
// start : ['january', 'july', 'march', 'august']
// final : ['july', 'june', 'march', 'august']

let start = ['january', 'july', 'march', 'august'];
console.log(start.splice(0, 2,"july", "june"));
console.log(start);






// Qs-2. -->Return the indexof the "javascript" from the given Array, if it was reversed.
// ['c','c++','html','javascript','python','java','c#','sql']


let lang = ['c','c++','html','javascript','python','java','c#','sql'];
console.log(lang.reverse().indexOf("javascript"));
console.log(lang);


