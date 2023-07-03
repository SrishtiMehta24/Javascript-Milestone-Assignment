const calculateTotalCost = (cart) => {
    const totalCost = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
    return totalCost;
};

const customerCart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 3 },
    { unitPrice: 8, quantity: 1 },
];
  
const totalCost = calculateTotalCost(customerCart);
console.log(totalCost);
  