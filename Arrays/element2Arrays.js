//Delete()
let num = [1,2,3,4,5,6,7,8,9]
let num_more = [11,12,13,14,15,16,77,88]
delete num[0]
console.log(num) // delte first elemet of array

// Concat()
let newArray = num.concat(num_more)
console.log(newArray)// used to  join arrayn,no array will changed here

//Sort()
let compare = (a,b)=>
{
    return a-b
}
let num2 = [551,22,3,14,6,7,8,29]
num.sort(compare)
console.log(num)// it arrange in order in ascending order

//Reverse() it will change the order

num.reverse()

