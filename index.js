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
<<<<<<< HEAD
  var itemnum = cart.length

  if (itemnum >= 2) {
    var printout = "In your cart, you have "
    var size = cart.length - 1

    for (var i = 0; i < size; i++) {
      for (var x in cart[i]){
        printout += x + " at $" + cart[i][x] + ", "
      }
    }

    for (var y in cart[size]) {
      printout += "and " + y + " at $" + cart[size][y] + "."
    }

    console.log(printout)
  } else if (itemnum == 1) {
    console.log("In your cart, you have " + cart[0] + " at $" + cart[0][1] + ".")
  } else {
    console.log("There is nothing in your cart.")
  }


=======
  var printout = []
  var size = cart.length

  for (var i = 0; i < size; i++) {
    for (var x in cart[i]){
      printout.push(x + " at $" + cart[i][x])
    }
  }

  if (size >= 3) {
    
  } else if (size == 2) {
    console.log("In your cart, you have " + printout[0] + " and " + printout[1] + ".")
  } else if (size == 1) {
    console.log("In your cart, you have " + printout.join() + ".")
  } else {
    console.log("Your shopping cart is empty.")
  }
>>>>>>> 1d24fdbda1a5300e597b2a81a63dd3fd5a9a9b7c
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
