let name = "srishti";
let capitalizedName = name[0].toUpperCase() + name.slice(1);

capitalizedName = name[0].toLowerCase() === name[0]
  ? name[0].toUpperCase() + name.slice(1)
  : name;

console.log("Modified name:", capitalizedName);

