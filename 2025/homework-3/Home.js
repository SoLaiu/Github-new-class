const radius = 5; // I use const to declare the variable "radius" and set it to 5

let area = 0; // declare the variable "area" and set it to 0
let perimeter = 0; // declare the variable "perimeter" and set it to 0
    
area = Math.PI * Math.pow(radius, 2); // calculate the area by using the formula πr²
perimeter = 2 * Math.PI * radius; // // calculate the perimeter by using the formula 2πr

console.log("Area of circle", area); // log the area  
console.log("Perimeter of circle", perimeter); // log the perimeter