
let eurotodollar = 1.13
let dollartoeuro = 0.88
let eurotopound = 0.86
let poundtoeuro = 1.16
function convertCurrency(amount, fromCurrency, toCurrency) {
    let convertedAmount;
    if (fromCurrency === "euro" && toCurrency === "dollar") {
        convertedAmount = amount * eurotodollar;
    } else if (fromCurrency === "dollar" && toCurrency === "euro") {
        convertedAmount = amount * dollartoeuro;
    } else if (fromCurrency === "euro" && toCurrency === "pound") {
        convertedAmount = amount * eurotopound;
    } else if (fromCurrency === "pound" && toCurrency === "euro") {
        convertedAmount = amount * poundtoeuro;
    }
    return convertedAmount;
}
console.log(convertCurrency(100, "euro", "dollar")); // Output: 113
console.log(convertCurrency(100, "dollar", "euro")); // Output: 88
console.log(convertCurrency(100, "euro", "pound")); // Output: 86
console.log(convertCurrency(100, "pound", "euro")); // Output: 116
console.log(convertCurrency(30, "dollar", "euro")); // Output: 26.4
console.log(convertCurrency(34, "euro", "pound")); // Output: 43