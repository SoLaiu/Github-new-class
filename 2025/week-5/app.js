const h1Ref = document.getElementById("title");

console.log("h1Ref:", h1Ref);

const letterGradeRfs = document.getElementsByClassName("letter-grade");

console.log("letterGradeRfs:", letterGradeRfs);

const pRef = document.querySelector("p");

console.log("pRef:", pRef);

const h1AllRef = document.querySelectorAll("#title");

console.log("h1AllRef:", h1AllRef);

const liRef = document.querySelectorAll("li");

console.log("liRef:", liRef);

const ulRef = document.querySelector("ul");

console.log("ul textContent", ulRef.textContent);

console.log("ul innerText", ulRef.innerText);

console.log("ul innerHTML", ulRef.innerHTML);

pRef.innerText = "The cozy old farmhouse ate the little green rock.";

ulRef.innerHTML = "<li class='letter-grade'>C</li>";
ulRef.innerHTML += "<li class='letter-grade'>D</li>";
ulRef.innerHTML += "<li class='letter-grade' style='display: none'>E</li>";
ulRef.innerHTML += "<li class='letter-grade'>F</li>";

h1Ref.style.backgroundColor= "red"; 
h1Ref.style.color= "white";

pRef.style.backgroundColor= "#00ff00";
pRef.style.color= "rgb(112, 152, 36)";
pRef.style.height= "400px";
pRef.style.width= "400px";

h1Ref.style.display= "none";

h1Ref.style.display= "block";


const ulLiRefs = ulRef.querySelector("li");

console.log("ulLiRefs:", ulLiRefs);

const googleLinkRef = document.querySelector("a.google");

googleLinkRef.href = "https://www.google.com";
googleLinkRef.target = "_blank";

const inputRef = document.querySelector("input");

inputRef.value = "placeholder", "Green jello with the carrots";

pRef.dataset.age ="89";

console.log(pRef.dataset);
pRef.classList.add("blue");

pRef.classList.remove("blue");
console.log (pRef.classList.contains("blue"));

const newLi = document.createElement("li");
newLi.textContent = "G";
newLi.classList.add("letter-grade");

ulRef.appendChild(newLi);

