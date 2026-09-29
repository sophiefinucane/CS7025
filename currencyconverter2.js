let amount= 100;
let fromcurrency = "euro";
let tocurrency = "dollar";

let eurotodollar = 1.13
let dollartoeuro = 0.88


if (fromcurrency === "euro" && tocurrency === "dollar") {
    let result = amount * eurotodollar;
    console.log(amount + " euro =" + result + " dollar");
} else if (fromcurrency === "dollar" && tocurrency === "euro") {
    let result = amount * dollartoeuro;
    console.log(amount + " dollar =" + result + " euro");
} else {
    console.log("Invalid currency conversion");     
}

