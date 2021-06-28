const n = parseInt(prompt("Enter The Number"));
let result = (Math.pow(2, n));
if (result <= 256) {
    for (let i = 1; i <= n; i++) {
        console.log(Math.pow(2, i));

    }
} else {
    for (i = 1; i <= 8; i++) {
        console.log(Math.pow(2, i));
    }

}

