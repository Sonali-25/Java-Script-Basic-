let A = prompt("Enter The Number");
let B = prompt("Enter The Number");
let C = prompt("Enter The Number");
A + B * C;
C + A / B;
A % B + C;
A * B + C;
if (A >= B && A >= C) {
    console.log("A is maximum",+A);    
}else if(B >= A && B >= C) {
    console.log("B is maximum",+B);
}else{
    console.log("C is maximum",+C);
}
if (A <= B && A <= C) {
    console.log("A is minimum",+A);    
}else if(B <= A && B <= C) {
    console.log("B is minimum",+B);
}else{
    console.log("C is minimum",+C);
}   