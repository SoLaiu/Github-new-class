const radius = 5; // I use const make the radius equal to 5

let area = 0; // declare area
let perimeter = 0;
    
area = Math.PI * Math.pow(radius, 2); // calculate the area
perimeter = 2 * Math.PI * radius; // calculate the perimeter

console.log("Area of circle", area); // log the area  
console.log("Perimeter of circle", perimeter); // log the perimeter