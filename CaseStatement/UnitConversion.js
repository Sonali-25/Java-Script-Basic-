console.log("1. Feet To Inch 2. Inch to Feet 3. Feet To Meter 4. Meter To Feet");
const choice = prompt("Enter The Number");
switch(choice){
    case '1':
        let feet = prompt("Enter The Value");
        let inch = feet*12;
        console.log(inch);
        break;
    case '2':
        inch = prompt("Enter The Value");
        feet = inch/12;
        console.log(feet);
        break;
    case '3':
        feet = prompt("Enter The Value");
        let meter = feet/3.281;
        console.log(meter);
        break;
    case '4':
        meter = prompt("Enter The Value");
        feet = meter*3.281;
        console.log(feet);
        break;
    dafault:
        console.log("Enter The Correct Choice");
}

