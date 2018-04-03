var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var itemAdd = { itemName: item, itemPrice: price }
  cart.push(itemAdd)
  return `${item} has been added to your cart.`
}

function viewCart() {
  for (var i = 0; i < cart.length; i++) {
    return ('In your cart, you have ' + `${cart[itemName[i]]} at ${cart[itemPrice[i]]}, ` + i++)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
