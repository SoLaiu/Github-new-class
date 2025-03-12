const menuList = document.getElementById("menu");
const cartTable = document.getElementById("cart");
const noItemsRow = document.getElementById("no-items");

const menuItems = [
    { name: "Hamburger", price: 2.99 },
    { name: "Cheeseburger", price: 3.99 },
    { name: "Cheese Pizza", price: 3.99 },
    { name: "Pepperoni Pizza", price: 4.99 },
    { name: "Sausage Pizza", price: 4.99 },
    { name: "Caesar Salad", price: 3.99 },
    { name: "Fries", price: 1.99 },
    { name: "Onion Rings", price: 2.49 }
  ];

let cart = [];


  
for (let item of menuItems) {
    const li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price.toFixed(2);
    const button = document.createElement("button");
    button.textContent = "+";
    button.dataset.name = item.name;
    button.dataset.price = item.price;
    button.onclick = function() {
        cart.push({ name: item.name, price: item.price, specialRequest: "" });
        showCart();
      };
    li.appendChild(button);
    menuList.appendChild(li);
  }
  

function showCart() {
    for (let i = cartTable.rows.length - 1; i > 0; i--) {
        cartTable.deleteRow(i);
    }

    if (cart.length === 0) {
      const row = cartTable.insertRow();
      row.id = "no-items";
      const cell = row.insertCell();
      cell.colSpan = 4;
      cell.textContent = "No items in cart";
    } 
    else {
        for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
         const row = cartTable.insertRow();
         const nameCell = row.insertCell();
        nameCell.textContent = item.name;

        const priceCell = row.insertCell();
        priceCell.textContent = "$" + item.price;
        
        const requestCell = row.insertCell();
        const textarea = document.createElement("textarea");
        textarea.value = item.specialRequest;
        textarea.oninput = function() {
                item.specialRequest = this.value;
            };
        requestCell.appendChild(textarea);
        
        const actionsCell = row.insertCell();
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function(index) {
            return function() {
                cart.splice(index, 1);
                showCart();
            };
        }(i);
        actionsCell.appendChild(removeButton);
        };
      
      
      const totalRow = cartTable.insertRow();
      const totalCell = totalRow.insertCell();
      totalCell.textContent = "Total";
      const totalPriceCell = totalRow.insertCell();
      totalPriceCell.colSpan = 3;
      let total = 0;
        for (let j = 0; j < cart.length; j++) {
            total = total + cart[j].price;
        }
        totalPriceCell.textContent = "$" + total.toFixed(2);
    }
  }
  
  showCart();