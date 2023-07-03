let carts = ["bottle", "pen", "pencil", "bottle"]
let uniqueCart = []

for (let item of carts) {
    if(!uniqueCart.includes(item)){
        uniqueCart.push(item)
    }
}
console.log("Original cart : ",carts)
console.log("Cart without duplicate : ",uniqueCart)