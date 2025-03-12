const h1Ref = document.querySelector("h1");
const nameRef = document.querySelector("#name");
const sizeRef = document.querySelector("#size");

function changeH1Style() {
  if (h1Ref.style.background !== "red") {
    h1Ref.style.background = "red";
} else {
    h1Ref.style.background = "white";
  }
}

function changeH1color(e) {
  h1Ref.style.color = e.target.value;
}
function changeH1size(e) { 
    const fontSize = Number(e.target.value);
    if (fontSize >=8) {
        h1Ref.style.fontSize = e.target.value + "px";
    } else {
        h1Ref.style.fontSize = "8px";
    }
}
 

h1Ref.onclick = changeH1Style;

h1Ref.onclick = changeH1color;

sizeRef.oninput = changeH1size;
sizeRef.onchange = changeH1size;

