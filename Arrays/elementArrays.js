//to  string
let num =[1,2,3,34,4]
let b = num.toString()// b is now a string
console.log(b)
// output:1,2,3,34,4

// join
let c = num.join("_")
console.log(c) // here it will add whatever ypu have given the value
//output:1_2_3_34_4

// pop- this commad will remove the last elementfrom the array
let r = num.pop ()
console.log(num,r)
//output: [ 1, 2, 3, 34 ] 4

//push-add a new elemets at end of the array and tell the lenght of the array also
let x = num.push(56)
console.log(num,x)

//shift()-Remove first and return it
let t = num.shift()
console.log(t)// it will return 1


//Unshift
let y = num.unshift(8)
console.log(y,num)
