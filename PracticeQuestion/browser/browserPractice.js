//1
let age = prompt ("enter your age ")
age = Number.parseInt(age)

const canDrive = (age)=>{
    return age>=18 ? true:false
}
if (canDrive (age)){
    alert("Yes you can drive")

}
else{
    alert("You can not drive")
}



//2
let runAgain = true;
const canDrive=(age)=>{
    return age>=18? true:false
}
while(runAgain){
    let age = prompt("Enter  your age ")
    age = Number.parseInt(age)
    if (age < 0){ // line 26 to 28 is the 3 question solution 
    console.error("Please enter valid age ");
    break; }
    if (canDrive(age)){
        alert("yes you can drive")
    }
    runAgain =  confirm ("do you want to play again ?")
}


//4

let number = prompt("enter your number ")
number = Number.parseInt(number)
if(number > 4){
    location.href="https://github.com/0Sankalp"// this will goes to my github account 
}


//5 it will change the color of the  bg of your page ny user choice
let color = prompt("enter the page by color")
document.body.style.background = color