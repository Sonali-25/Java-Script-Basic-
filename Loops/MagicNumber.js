const usernumber = parseInt(prompt("Enter The User Number Between 1 To 100"));
var number = Math.floor((Math.random() * 100) + 1);
while(number != usernumber){
    number = Math.floor((Math.random() * 100) + 1);
    if(number <= usernumber/2){
        console.log(`${number} is less than ${usernumber}`);
    }else {
        console.log(`${number} is greater than ${usernumber}`);
    }
}
console.log("Number Is Reached");