var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  cart.push({[item]: Math.floor(Math.random()*100)})
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  // write your code here
  var itemnum = cart.length

  if (itemnum >= 2) {
    for (var i = 0; i < itemnum; i++) {
      for (var x in cart[i]){
        if (i !== itemnum-1 && itemnum >= 3) {
          printout += x + " at $" + cart[i][x] + ", "
        } else if (i !== itemnum-1) {
          printout += x + " at $" + cart[i][x] + " "
        } else {
          printout += "and " + x + " at $" + cart[i][x] + "."
        }
      }
    }
    console.log(printout)
  } else if (itemnum == 1) {
    console.log("In your cart, you have " + cart[0] + " at $" + cart[0][1] + ".")
  } else {
    console.log("There is nothing in your cart.")
  }
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    for (var x in cart[i]) {
      total += parseInt(cart[i][x])
    }
  }
  return total
}

function removeFromCart(item) {
  var index = -1
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item) === true) {
      index = 1
    }
  }

  if(index !== -1) {
    cart.splice(index, 1)
    return cart
  } else {
    return ("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
