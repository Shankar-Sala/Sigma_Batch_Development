// Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit. 
// Eg:32 and 47852 have the same last digit i.e.2

let num1 = 37;
let num2 = 12357;

if((num1%10) == (num2%10)){
    console.log("numbers have same last digit which is " ,num1%10);
}else{
    console.log("numbers don't have same last digit");
}

