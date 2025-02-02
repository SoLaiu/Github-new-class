// i chose const because the price of the item is fixed
const itemPrice = 40.99;
// i chose const because the sales tax is fixed puls the sales tax is fixed and discountthreshold is fixed. i don't need to be changed.
const salesTax = 0.07;
const discountRate = 0.10;
const discountThreshold = 50;

//Calculate total after tax
const totalAfterTax = itemPrice * (1 + salesTax);
console.log("Total after tax", totalAfterTax);

//This is to Check if item qualifies for a discount
const qualifiesForDiscount = itemPrice > discountThreshold;
console.log("Qualifies for discount", qualifiesForDiscount);

//Calculate discounted total after tax
const discountedTotalAfterTax = itemPrice * (1 + salesTax) *(1 - discountRate);
console.log("Discounted total after tax", discountedTotalAfterTax);