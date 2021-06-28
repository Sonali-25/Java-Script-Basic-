const Heads = 0;
let Toss = Math.floor(Math.random() * 10) % 2;
if (Toss == Heads) {
    console.log("Heads");
}else{
    console.log("Tails");
}