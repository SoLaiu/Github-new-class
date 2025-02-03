// I use const because it should not be changed
const password = "(d0nteatTheScript)";

const ifthepasswordstartsWithSpace = password.startsWith(" ");
console.log("Starts with space", ifthepasswordstartsWithSpace);

const atleast8charaterslong = password.length >= 8;
console.log("Atleast 8 characters long", atleast8charaterslong);

const containsEat = password.includes("!eat");
console.log("Contains eat", containsEat);