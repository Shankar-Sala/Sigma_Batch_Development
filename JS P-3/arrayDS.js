// let student1 = "shankar";
// let student2 = "Sagar";
// let student3 = "ram";

// let student = ["shankar", "sagar", "ram"];

// visualizing Array 

// let nums = [2, 4, 6, 8];
// console.log(nums[0]);


//Creating Arrays
// let info = ["shankar", 21, 90];
//empty array
// let newArr = [];

// console.log(info.length);
// console.log([].length);
// console.log([1,2,3,4].length);
// console.log(info[0][0]);
// console.log(info[0][1]);
// console.log(info[0].length);



// Array are Mutable 
// let fruits = ["mango", "apple", "litchi"];

// fruits[0]="banana";
// fruits[1]="pineapple";
// fruits[10]="papaya";
// console.log(fruits);



//Array Methods
// 1.push 

// let cars = ["audi","bmw","xuv","maruti"];

// console.log(cars);

// console.log(cars.push("toyota"));
// console.log(cars);

// console.log(cars.push("ferrari"));
// console.log(cars);


// 2.POP

// console.log(cars.pop());
// console.log(cars);

// 3. Unshift 

// console.log(cars.unshift("Toyota"));
// console.log(cars);

// 4. shift 

// console.log(cars.shift("Toyota"));
// console.log(cars);

// example
// let followers = ["a","b","c"];
// let blocked = followers.shift();

// console.log(blocked);
// console.log(followers);


// 5. indexOf() 

// let cars = ["audi","bmw","xuv","maruti"];
// console.log(cars.indexOf("bmw"));
// console.log(cars.indexOf("bmW"));

// 6. includes() 

// let cars = ["audi","bmw","xuv","maruti"];
// console.log(cars.includes("bmw"));
// console.log(cars.includes("toyota"));

// 7. concat()
// let primary = ["red","yellow","blue"];
// let secondary =["orange", "green", "violet"];
// console.log(primary.concat(secondary));


// 8.reverse()
// let primary = ["red","yellow","blue"];
// console.log(primary.reverse());

// 9. slice 

// let primary = ["red","yellow","blue","orange", "green", "violet"];

// console.log(primary.slice());
// console.log(primary.slice(2));
// console.log(primary.slice(2,3));
// console.log(primary.slice(-2));  //last value green, violet

// 10. splice()
// let primary = ["red","yellow","blue","orange", "green", "violet"];

// console.log(primary.splice(4));
// console.log(primary.splice(0,1));
// console.log(primary.splice(0,1,"black",'grey'));
// console.log(primary);

// 11. sort()

let primary = ["red","yellow","blue","orange", "green", "violet"];

console.log(primary.sort());



