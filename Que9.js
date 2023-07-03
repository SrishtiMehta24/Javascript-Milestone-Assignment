let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];

for (let number of numbers) {
  if (number % 3 === 0 && number % 2 !== 0) {
    result.push(number);
  } else {
    continue;
  }
}

console.log("Numbers divisible by 3 but not by 2:", result);
