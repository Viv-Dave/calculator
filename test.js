// Declaration of numerical buttons
const onebtn = document.getElementById("onebtn");
const twobtn = document.getElementById("twobtn");
const threebtn = document.getElementById("threebtn");
const fourbtn = document.getElementById("fourbtn");
const fivebtn = document.getElementById("fivebtn");
const sixbtn = document.getElementById("sixbtn");
const sevenbtn = document.getElementById("sevenbtn");
const eightbtn = document.getElementById("eightbtn");
const ninebtn = document.getElementById("ninebtn");
const zerobtn = document.getElementById("zerobtn");

// Declaration for operators 
const addbtn = document.getElementById("addbtn");

const subbtn = document.getElementById("subbtn");

const probtn = document.getElementById("probtn");

const divbtn = document.getElementById("divbtn");

const resultbtn = document.getElementById("resultbtn");

const clearbtn = document.getElementById("clearbtn");

// Screen
const screen = document.getElementById("screen");

// Declaring variables for operands and operator
let a = 0;
let b = 0;
let operatorz = '';

// Event listeners for numerical buttons
onebtn.addEventListener('click', function() {
    addToScreen(1);
});

twobtn.addEventListener('click', function() {
    addToScreen(2);
});

threebtn.addEventListener('click', function() {
    addToScreen(3);
});

fourbtn.addEventListener('click', function() {
    addToScreen(4);
});

fivebtn.addEventListener('click', function() {
    addToScreen(5);
});

sixbtn.addEventListener('click', function() {
    addToScreen(6);
});

sevenbtn.addEventListener('click', function() {
    addToScreen(7);
});

eightbtn.addEventListener('click', function() {
    addToScreen(8);
});

ninebtn.addEventListener('click', function() {
    addToScreen(9);
});

zerobtn.addEventListener('click', function() {
    addToScreen(0);
});

// Declaration of operator usage and result
addbtn.addEventListener('click', function() {
    resetdisplay();
    setOperator('+');
});
subbtn.addEventListener('click', function(){
    resetdisplay();
    setOperator('-');
});
probtn.addEventListener('click', function() {
    resetdisplay();
    setOperator('x');
});
divbtn.addEventListener('click',function() {
    resetdisplay();
    setOperator('/');
});
resultbtn.addEventListener('click', function() {
    let result = operation(a, b);
    screen.textContent = result;
});

clearbtn.addEventListener('click', function() {
    clearScreen();
});

// Function to perform the operation
function operation(a, b) {
    switch (operatorz) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'x':
            return a*b;
        case '/':
            if (b == 0) {
                return "Value Error";
            }
            else {
                answer = (a/b).toFixed(5);
                return answer;
            }
        default:
            return 0;
    }
}

// Function to clear the screen
function resetdisplay() {
    screen.textContent = '';
}

// Function to add numbers to the screen
function addToScreen(number) {
    if (operatorz === '') {
        a = a * 10 + number;
        screen.textContent = a;
    } else {
        b = b * 10 + number;
        screen.textContent = b;
    }
}

// Function to clear the screen and reset values
function clearScreen() {
    screen.textContent = '';
    a = 0;
    b = 0;
    operatorz = '';
}

// Function to set the operator
function setOperator(op) {
    operatorz = op;
}
