function celcius_to_farenheit(c){
    let f = (c*9/5)+32;
    console.log("Temperature In Farenheit" +f); 
}
function Farenheit_to_celcius(f){
    let c = (f-32)*5/9;
    console.log("Temperature In Celcius" +c);
}
var f = parseInt(prompt("Enter Temperature In Farenheit"));
Farenheit_to_celcius(f);
var c = parseInt(prompt("Enter Temperature In Celcius"));
celcius_to_farenheit(c);