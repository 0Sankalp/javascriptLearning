const prompt = require("prompt-sync")();
let n = prompt("enter the value of n")

n = Number.parseInt(n)

let i = 0;
do{
    console.log(i)
    i++;
}
while(i<n)