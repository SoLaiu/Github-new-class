//References to DOM
const detailsSectionRef = document.querySelector ("#details");

//Data
const pokemon = {
    name: "ponyta",
    type: "fire",
    weeknesses: ["water", "ground", "rock"],

}
const myParty = [
    {name: "ponyta", type: "fire"},
    {name: "chimhar", type: "fire"},
    {name: "meowth", type: "Normal"},
    {name: "Houndoom", type: "Dark,Fire"},
];
console.log("my starter pokemon:", pokemon);
console.log("my pokemon's type:", pokemon.type);
console.log("my pokemon's weaknesses:", pokemon.weeknesses);

console.log("First pokemon in party:", myParty[0]);
console.log("Last pokemon name:", myParty[myParty.length - 1].name);

for (let i = 0; i < myParty.length; i++) {
    const currentPokemon = myParty[i];
    detailsSectionRef.innerHTML += "<div>";
    detailsSectionRef.innerHTML += "<h4>" + currentPokemon.name + "</h4>";
    detailsSectionRef.innerHTML += "<p>Type: " + currentPokemon.type + "</p>";
    detailsSectionRef.innerHTML += "</div>";
}

