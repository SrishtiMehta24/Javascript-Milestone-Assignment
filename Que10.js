function correctCartBug(cart) {
    let correctedCart = [];
  
    for (let quantity of cart) {
      correctedCart.push(quantity * 2);
    }
  
    return correctedCart;
}
let cart = [1, 2, 3, 4, 5];
let correctedCart = correctCartBug(cart);

console.log("Corrected Cart:", correctedCart);
