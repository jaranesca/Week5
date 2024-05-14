"use strict";

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
 
    { product: "Sour Patch Kids", price: 3.49 },
    { product: "Jelly Beans", price: 4.29 },
    { product: "Twizzlers", price: 1.99 },
    { product: "Snickers", price: 2.49 },
    { product: "Kit Kat", price: 3.99 },
    { product: "Skittles", price: 3.29 }
];


let cheapCandies = products.filter(candy => candy.price < 4.00);
console.log("Candies that cost less than $4.00:");
console.log(cheapCandies);


let mmCandies = products.filter(candy => candy.product.includes("M&M"));
console.log("Candies with 'M&M' in their name:");
console.log(mmCandies);


let swedishFish = products.find(candy => candy.product === "Swedish Fish");
if (swedishFish) {
    console.log("Yes, we carry Swedish Fish.");
} else {
    console.log("No, we do not carry Swedish Fish.");
}
