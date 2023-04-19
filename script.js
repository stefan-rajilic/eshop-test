let itemsCart = [];
let totalPrice = 0;

function addToCart(productId) {

  var productName = document.getElementById(productId).getElementsByClassName("card-title")[0].innerHTML;
  var productPrice = parseInt(document.getElementById(productId).getElementsByClassName("card-price")[0].innerHTML);

  let product = {
    name: productName,
    price: productPrice,
    quantity: 1
  };

  let productToFind = itemsCart.find(item => item.name === productName);
  
  if (productToFind) {
    productToFind.quantity++;
    totalPrice += productPrice; // total price = total price + productPrice
  } else {
    itemsCart.push(product);
    totalPrice += productPrice;
  }

  console.log(itemsCart, totalPrice);
}

function renderCart() {
  var table = document.createElement("table");
  var headerRow = table.insertRow();
  var nameHeader = headerRow.insertCell(0);
  nameHeader.innerHTML = "Název";
  nameHeader.style.fontSize = "20px";
  var priceHeader = headerRow.insertCell(1);
  priceHeader.innerHTML = "Cena";
  priceHeader.style.fontSize = "20px";
  //priceHeader.style.marginLeft = "60px";
  var qtyHeader = headerRow.insertCell(2);
  qtyHeader.innerHTML = "Počet kusů";
  qtyHeader.style.fontSize = "20px";

  itemsCart.forEach(function(item) {
    var row = table.insertRow();
    var nameCell = row.insertCell(0);
    nameCell.innerHTML = item.name;
    nameCell.style.paddingRight = "30px"; // add more space between name and price
    var priceCell = row.insertCell(1);
    priceCell.innerHTML = item.price;
    priceCell.style.paddingRight = "30px"; // add more space between name and price
    var qtyCell = row.insertCell(2);
    qtyCell.innerHTML = item.quantity;

  });

  document.getElementById("cart-container").appendChild(table);

  var totalDiv = document.createElement("div");
  totalDiv.innerHTML = "Celková vena:    " + totalPrice.toFixed(2) + ",-Kč";
  document.getElementById("cart-container").appendChild(totalDiv);
}

function clearCart() {
  itemsCart = [];
  totalPrice = 0;
  document.getElementById("cart-container").innerHTML = "";
}

function closeCart() {
   document.getElementById("cart-container").innerHTML = "";
}

