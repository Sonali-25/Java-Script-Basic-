var N = prompt("Enter the Number");
var total = 1;
var value = 0;
var remainder = 0;
while(N!=0){
    remainder = N%10;
    N = parseInt(N/10);
    value = total*remainder;
    console.log(value);
    total = total*10;
}