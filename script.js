var a = parseFloat(prompt("Enter first integer: "));
var b = parseFloat(prompt("Enter integer b"));
// Choose an operation to perform 
console.log("Choose: \n 1 for addition \n 2 for subtraction \n 3 for multiplication \n 4 for division")
var operation = parseInt(prompt("Enter your choice: "));
function operator(int1,int2) {

    var c = 0;
    if (!validateDecimalNumber(int1) || !validateDecimalNumber(int2)) {
        console.log("Enter a valid decimal value");
        return "Not valid";
    }

    if (operation == 1) {
        var c = int1+int2;
    }
    else if (operation == 2) {
        var c = int1-int2;
    }
    else if (operation == 3) {
        var c = int1*int2;
    }
    else if (operation == 4) {
        if (int2 == 0) {
            console.log("Error! Division by zero not possbile.");
            return;
        }
        var c = int1/int2;
    }
    return c;
}
function validateDecimalNumber(input) {
    const decimalPattern = /^-?\d*\.?\d+$/;
 
    // Test if the input matches the pattern
    return decimalPattern.test(input);
}
let result = operator(a,b);
console.log("Result of arithmetic operation is:"+ result);