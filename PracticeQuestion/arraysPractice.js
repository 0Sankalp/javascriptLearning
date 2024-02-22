//create an array  of number and take input from the user to add numver to the array

let arr =[1,2,3,4,5,6,7,8]
const prompt = require("prompt-sync")();
let a = prompt("enter the number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)
//output-enter the number9
//[
 //   1, 2, 3, 4, 5,
//   6, 7, 8, 9
//  ]


//keep adding number to the array in ques1 until 0 added to the array

let arr1 =[1,2,3,4,5,6,7,8]
do{
const prompt = require("prompt-sync")();
 a = prompt("enter the number:")
a = Number.parseInt(a)
arr1.push(a)
console.log(arr1)
} while(a!=0);
console.log(arr1)
// output-enter the number:45
//[
//  1, 2, 3,  4, 5,
//  6, 7, 8, 45
//]
//enter the number:0
//[
//  1, 2, 3,  4, 5,
//  6, 7, 8, 45, 0
//]
//[
//  1, 2, 3,  4, 5,
//  6, 7, 8, 45, 0
//]


// filter for number divisible by 10 from a given array
let arr2 = [2,4,8,10,50,30,80]
let x = arr2.filter((X)=>{
    return X%10 ==0
})
console.log(x)
//output-[ 10, 50, 30, 80 ]

//create an array of square of given number
let arr3 = [2,4,8,10,50,30,80]
let X= arr3.filter((X)=>{
    return X*X 
})
console.log(X)
// output-[ 2,  4,  8, 10,50, 30, 80 ]


//use reduce to calculate factorial of a given number form an array of first n natural number (x brings the number whose factorial to be calculted )
let arr4 = (1,23,4,5,67)
let n = arr.reduce((n1,n2)=>{
    return n1*n2

})
console.log(n)