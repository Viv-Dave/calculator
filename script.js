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

const signchange = document.getElementById("signchange");

const decimalbtn = document.getElementById("decimalbtn")
// Screen
const screen = document.getElementById("screen");
//Declaring Icons
const add_icon = document.getElementById("add_icon");
const sub_icon = document.getElementById("sub_icon");
const div_icon = document.getElementById("div_icon");
const pro_icon = document.getElementById("pro_icon");
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
signchange.addEventListener('click', function() {
    if (operatorz === '') {
        a = -(a);
        screen.textContent = a;
    } else {
        b = -(b);
        screen.textContent = b;
    }
});
// Declaration of operator usage and result
addbtn.addEventListener('click', function() {
    resetdisplay();
    setOperator('+');
    add_icon.style.color = "white";
});
subbtn.addEventListener('click', function(){
    resetdisplay();
    setOperator('-');
    sub_icon.style.color = "white";
});
probtn.addEventListener('click', function() {
    resetdisplay();
    setOperator('x');
    pro_icon.style.color = "white";
});
divbtn.addEventListener('click',function() {
    resetdisplay();
    setOperator('/');
    div_icon.style.color = "white";
});
decimalbtn.addEventListener('click', function() {
    addDecimal();
});
delbtn.addEventListener('click', function() {
    deleteLastCharacter();
});

resultbtn.addEventListener('click', function() {
    let result = operation(a, b);
    if (result === "Value Error") {
        screen.textContent = result;
    } else {
        screen.textContent = result.toFixed(5);
    }
    add_icon.style.color = "";
    sub_icon.style.color = "";
    pro_icon.style.color = "";
    div_icon.style.color = "";
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
            if (b === 0) {
                return "Value Error";
            }
            else {
                answer = a/b;
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
        if (String(a).includes('.') && number === '.') return;
        a = parseFloat(String(a) + number);
        screen.textContent = a;
    } else {
        if (String(b).includes('.') && number === '.') return;
        b = parseFloat(String(b) + number);
        screen.textContent = b;
    }
}

// Function to clear the screen and reset values
function clearScreen() {
    screen.textContent = '';
    a = 0;
    b = 0;
    operatorz = '';
    add_icon.style.color = "";
    sub_icon.style.color = "";
    pro_icon.style.color = "";
    div_icon.style.color = "";
}
function addDecimal() {
    if (operatorz === '') {
        if (!String(a).includes('.')) {
            a = String(a) + '.';
            screen.textContent = a;
        }
    } else {
        if (!String(b).includes('.')) {
            b = String(b) + '.';
            screen.textContent = b;
        }
    }
}

// Function to set the operator
function setOperator(op) {
    operatorz = op;
}
function deleteLastCharacter() {
    if (operatorz === '') {
        a = String(a).slice(0, -1);
        screen.textContent = a;
    } else {
        b = String(b).slice(0, -1);
        screen.textContent = b;
    }
}