let num = [3,54,1,2,4]
//for (let i = 0; i<num.length;i++){
  //  console.log(num[i])
//} 
 //output-3,54,1,2,4


//for each loop-Calls a function form a array
num.forEach((Element)=>{
console.log(Element*Element)
})
// output - 9,2916,1,4,16


// Array.from -use to create an Array from any other object

let name ="Dwarika"
let arr = Array.from (name)
console.log(arr)
//output-[
//  'D', 'w', 'a',
//  'r', 'i', 'k',
// 'a']


//for...of- used to get value from array
for (let i of num ){
    console.log(i)
} 
//output- 3,54,1,2,4


// for ... in- use to get the key from an array
for (let i in num ){
    console.log(i)
}
//output-0,1,2,3,4