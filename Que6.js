let name = "Srishti Mehta";
let vowelCount = 0;
let vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < name.length; i++) {
  let lowercaseChar = name[i].toLowerCase();
  if (vowels.includes(lowercaseChar)) {
    vowelCount++;
  }
}

console.log("Number of vowels:", vowelCount);
