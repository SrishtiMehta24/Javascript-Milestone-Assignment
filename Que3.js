let color1 = "red";
let color2 = "blue";

switch (color1.toLowerCase()) {
  case "red":
    switch (color2.toLowerCase()) {
      case "blue":
        console.log("Resulting color: purple");
        break;
      case "yellow":
        console.log("Resulting color: orange");
        break;
      default:
        console.log("Invalid color combination");
        break;
    }
    break;
    
    case "blue":
    switch (color2.toLowerCase()) {
      case "red":
        console.log("Resulting color: purple");
        break;
      case "yellow":
        console.log("Resulting color: green");
        break;
      default:
        console.log("Invalid color combination");
        break;
    }
    break;
  case "yellow":
    switch (color2.toLowerCase()) {
      case "red":
        console.log("Resulting color: orange");
        break;
      case "blue":
        console.log("Resulting color: green");
        break;
      default:
        console.log("Invalid color combination");
        break;
    }
    break;
  default:
    console.log("Invalid color combination");
    break;
}
