function letsGo() {
    console.log("FUnction Time!");
}

letsGo();

function calculateTotal(itemPrice, taxRate = 0.07, discountRate = 0.1) {
    const groupsOfTwenty = Math.floor(itemPrice / 20);

    switch (groupsOfTwenty) {
        case 1:
            return "small discount";
        case 2:
            return "medium discount";
        case 3:
            return "large discount";
        default:
            return "no discount";
    }
    
    if (itemPrice> 100){
        return itemPrice * (1 + taxRate) *(1- discountRate * 2);
    } else if (itemPrice > 50) {
        return itemPrice * (1 + taxRate) * (1 - discountRate);
    }
    else {
    return itemPrice * taxRate;
    }   
}

console.log("Kidney = $20, Tax Rte = 40%: " + calculateTotal(20, 0.4));

const item = [18, 24, 17, 3]

function showItems() {
    const newSection = document.createElement("section");
    newSection.innerHTML = "<h4>Items</h4>";

    for (let i = 0; i < item.length; i++) {
        newSection.innerHTML += "<p>$" + item[i] + "</p>";
    }
    newSection.innerHTML += "<hr />";

    newSection.innerHTML += "<p>$" + calculateTotal(item[0], 0.7) + "</p>";

    document.body.appendChild(newSection);
}

showItems();

