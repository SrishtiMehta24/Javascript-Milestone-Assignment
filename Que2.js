let num1 = 9;
let num2 = 8;
let operator = "/";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
        case "-":
            console.log(num1 - num2);
            break;
            case "*":
                console.log(num1 * num2);
                break;
                case "/":
                    console.log(num1 / num2);
                    break;
                    default:
                        console.log("Invalid Operator");
                        break;
}