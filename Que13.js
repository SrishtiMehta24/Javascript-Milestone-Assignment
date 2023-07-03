function calculateBill(costs, numberOfPeople) {
    const totalCost = costs.reduce((acc, curr) => acc + curr, 0);
    const billPerPerson = totalCost / numberOfPeople;
    
    const billSplit = {
    totalBill: totalCost,
    billPerPerson: billPerPerson,
};
    return billSplit;
}
  
const dishCosts = [25, 15, 12, 80]; // Cost of each dish
const numPeople = 4; // Number of people sharing the dishes
  
const result = calculateBill(dishCosts, numPeople);
console.log(result);
  