const scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38];


const ulRef = document.getElementById("scorelist");

const averageParagraph = document.getElementById("averageScore");

let sumOfScores = 0;
for (let i = 0; i < scores.length; i++) {
    ulRef.innerHTML += `<li>${scores[i]}</li>`;
    sumOfScores += scores[i];
}

const averageScore = sumOfScores / scores.length;

averageParagraph.textContent = `The average score is: ${averageScore.toFixed(2)}`;