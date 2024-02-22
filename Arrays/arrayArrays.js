//map()-create a new array by performing some operartion on each array elment
let arr =[45,23,21]

let a = arr.map ((value,index,Array)=>{
    console.log(value,index,Array)
    return value + 8
})
console.log(a)


// filter()- filter an array with valus that psses a test ,Create a new array
let arr2=[45,23,21,0,3,5]
let a2 = arr2.filter((a)=>{
    return a<10
})
console.log(a2)

//Reduce()
let arr3 = [1,2,3,5,2]
let newarr3 = arr3.reduce((h1, h2)=>{
    return h1 + h2
})
console.log(newarr3) 