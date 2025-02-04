const itemPrice = 40.99;
const salesTax = 0.07;
const discountRate = 0.10;
const discountThreshold = 50;

 console.log(itemPrice * (1 + salesTax));
 console.log(itemPrice > discountThreshold);
 console.log(itemPrice * (1 + salesTax) * (1 - discountRate));