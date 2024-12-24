let userInput1=prompt("Enter an integer:");
let userInput2=prompt("Enter an second integer:");

num1 = parseInt(userInput1, 10);
num2 =parseInt(userInput2,10)
document.getElementById("num1-el").innerHTML=num1  +","
document.getElementById("num2-el").innerHTML=num2

let sumEl=document.getElementById("sum-el")
let subEl=document.getElementById("sub-el")
function sum(){
    sumEl.innerHTML="sum is "+(num1+num2)
}
function sub(){
    subEl.innerHTML="The difference is "+(num1-num2)
}

