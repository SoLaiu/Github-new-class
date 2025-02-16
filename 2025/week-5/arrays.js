console.log("let's talk arrays");

const zodiacSigns = [
    "libra",
    "cancer",
    "leo",
    "Taurus",
    "scorpio",
    "Aquarius",
    "Gemini",
    "virgo",
    "pisces",
    "Aries",
    "sagittarius",
    "capricorn",
];

console.log("zodiacSigns:", zodiacSigns);
console.table(zodiacSigns);
console.log("2nd zodiac", zodiacSigns[1]);

console.log("# of zodiacs:", zodiacSigns.length);

const zodiacSigns2 = document.getElementById("zodiac-signs");

for (let i = 0; i < zodiacSigns.length; i++) {
    const zodiacSign = zodiacSigns[i];
    console.log("For Loop:", zodiacSign);
    zodiacSigns2.innerHTML += "<li>" + zodiacSign + "</li>";
}

const grades = [21, 6, 79, 8, 86, 4, 2, 84, 57, 10];

let sumOfGrades = 0;

for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];
    sumOfGrades += grade;
}

document.querySelector("section").innerHTML += "<h4>" + sumOfGrades / grades.length + "</h4>";