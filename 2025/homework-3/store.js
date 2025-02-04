const itemPrice = 40.99; // price of the item
const salesTax = 0.07; // sales tax rate
const discountRate = 0.10; // discount rate
const discountThreshold = 50;// minimum price for discount

 console.log(itemPrice * (1 + salesTax)); // calculate total price with tax
 console.log(itemPrice > discountThreshold); // check if item price is greater than discount threshold
 console.log(itemPrice * (1 + salesTax) * (1 - discountRate)); // calculate total price with tax and discount