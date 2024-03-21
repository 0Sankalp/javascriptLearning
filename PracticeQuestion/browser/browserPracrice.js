//1
const prompt = require ("prompt-sync")();
let age = prompt ("enter your age ")
age = Number.parseInt(age)
const canDrive = (age)=>{
    return age>=18 ;
}
if (canDrive (age)){
    alert("Yes you can drive")

}
else{
    alert("You can not drive")
}