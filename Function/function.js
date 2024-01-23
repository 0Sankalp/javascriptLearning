function onePlusAvg(x,y){

    return Math.round (1+(x+y)/2)
    // Math.round is command for rounding off the numbers

}
const sum = (p,q)=>
{
    return p+q
}
let a=4;
let b=7;
let c=8;

console.log("Avg of a&b =",onePlusAvg(a,b))
console.log("Avg of b&c =",onePlusAvg(b,c))
console.log("Avg of c&a =",onePlusAvg(c,a))
console.log(sum(9,7))