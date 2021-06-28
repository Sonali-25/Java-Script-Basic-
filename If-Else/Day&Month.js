var dateFrom = "03/20/2021";
var dateTo = "06/20/2021";
var dateCheck = prompt("Enter the Date");
var from = Date.parse(dateFrom);
var to = Date.parse(dateTo);
var check = Date.parse(dateCheck);
if ((check <= to && check >= from)){
    console.log("True");  
}else {
    console.log("False");
}
   
