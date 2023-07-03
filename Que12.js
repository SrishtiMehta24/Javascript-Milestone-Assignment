function calculateRentalCost(numDays, carType) {
    let rentalCost = 0;
  
    switch (carType) {
      case "Economy":
        rentalCost = 4000;
        break;
      case "Midsize":
        rentalCost = 15000;
        break;
      case "Luxury":
        rentalCost = 25000;
        break;
      default:
        console.log("Invalid car type.");
        return 0;
    }
  
    let totalCost = rentalCost * numDays;
    return totalCost;
  }

  let daysRented = 7;
let carType = "Economy";

let totalRentalCost = calculateRentalCost(daysRented, carType);

console.log("Total Rental Cost:", totalRentalCost);
