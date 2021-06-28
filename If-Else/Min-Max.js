const num1 = Math.floor((Math.random() * 999) + 10);
const num2 = Math.floor((Math.random() * 999) + 10);
const num3 = Math.floor((Math.random() * 999) + 10);
console.log(num1,num2,num3);
if (num1 >= num2 && num1 >= num3) {
    console.log("num1 is maximum",+num1);    
}else if(num2 >= num1 && num2 >= num3) {
    console.log("num2 is maximum",+num2);
}else{
    console.log("num3 is maximum",+num3);
}

if (num1 <= num2 && num1 <= num3) {
    console.log("num1 is minimum",+num1);    
}else if(num2 <= num1 && num2 <= num3) {
    console.log("num2 is minimum",+num2);
}else{
    console.log("num3 is minimum",+num3);
}   


    