/*
    Reduce method executes a reducer function on each array element and returns a single value. 
    Syntax- arr.reduce(callback(accumulator, currentValue), initialValue)
*/

// Example:1

const numbers = [1, 5, 4, 6, 2, 2];

const sum = numbers.reduce((total, value) => {
    return (total = total + value);
}, 0);

console.log(sum)

// Example:2

const products = [
     { name: "Laptop",price: 25000, },
     { name: "Phone",price: 10000, },
     { name: "Keyboard",price: 2500, },
     { name: "Mouse",price: 600, },
     { name: "Headphone",price: 1000, },
];

const bill = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log(bill);

// Example:3

const words = ["Reduce ","is ","a ","JavaScript ","Method"];

const line = words.reduce((sentence,word)=>{
    return sentence + word
},"Reduce - ")

console.log(line)

