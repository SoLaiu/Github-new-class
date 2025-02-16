const instruments = [
    "Piano", 
    "Guitar", 
    "Violin", 
    "Drums", 
    "Saxophone", 
    "Flute",
];
console.log("instruments:", instruments);

console.log("instruments:", instruments);
const ul = document.querySelector('ul');

for (let i = 0; i < instruments.length; i++) {
    const li = document.createElement('li');
    li.textContent = instruments[i];
    ul.appendChild(li);
    console.log("For Loop:", instruments);  
}

