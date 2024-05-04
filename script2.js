// Query Selector List
let calcScreen = document.querySelector(".calc-screen");
let calcScreen1 = document.querySelector("#calc-screen-1");
let calcScreen2 = document.querySelector("#calc-screen-2");
let clearBtn = document.querySelector("#clear-btn");
let clearEntryBtn = document.querySelector("#clear-entry-btn");
let percentageBtn = document.querySelector("#percentage-btn");
let backspaceBtn = document.querySelector("#backspace-btn");
let divideBtn = document.querySelector("#divide-btn");
let multiplyBtn = document.querySelector("#multiply-btn");
let subtractBtn = document.querySelector("#subtract-btn");
let addBtn = document.querySelector("#add-btn");
let equalsBtn = document.querySelector("#equals-btn");
let nmbrBtn = document.querySelector(".nmbr-btn");
let nmbrBtns = document.querySelectorAll(".nmbr-btn");
let operBtns = document.querySelectorAll(".oper-btn");
let zeroBtn = document.querySelector("#zero-btn");
let oneBtn = document.querySelector("#one-btn");
let twoBtn = document.querySelector("#two-btn");
let threeBtn = document.querySelector("#three-btn");
let fourBtn = document.querySelector("#four-btn");
let fiveBtn = document.querySelector("#five-btn");
let sixBtn = document.querySelector("#six-btn");
let sevenBtn = document.querySelector("#seven-btn");
let eightBtn = document.querySelector("#eight-btn");
let nineBtn = document.querySelector("#nine-btn");
let decimalBtn = document.querySelector("#decimal-btn");

calcScreen1.innerHTML = "";
let nmbr1 = 0;
let nmbr2 = 0;
let operActive = false;
let newNum = false;

// Event Listener List
clearBtn.addEventListener("click", () => {
    nmbr1 = 0;
    nmbr2 = 0;
    calcScreen1.innerHTML = "";
    calcScreen2.innerHTML = "0";
    operActive = false;
    newNum = false;
    console.log("Value 1: " + nmbr1);
    console.log("Value 2: " + nmbr2);
    console.log("Operator Active?: " + operActive);
    console.log("New Number Active?: " + newNum);
    
});

decimalBtn.addEventListener("click", () => {
    if (calcScreen2.innerHTML.includes(".")) {
        // Left blank to not include another "." if one already exists
    } else {
        calcScreen2.innerHTML = calcScreen2.innerHTML + ".";
    }
});

equalsBtn.addEventListener("click", () => {
    let result = nmbr1 + oper + nmbr2;
    calcScreen2.innerHTML = parseFloat(result);
});

operBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        let buttonOper = this.textContent;
        console.log("Operator Selected: " + buttonOper);
        if (calcScreen2.innerHTML === "0") {
            // Left blank to stop "0" being entered to calcscreen1 after using a function
        } else if (operActive === true) {
            if (buttonOper === "+") {
                nmbr2 = nmbr2 + parseFloat(calcScreen2.innerHTML);
                console.log("Value 1: " + nmbr1);
                console.log("Value 2: " + nmbr2);
                calcScreen1.innerHTML = calcScreen1.innerHTML + calcScreen2.innerHTML;
                calcScreen1.innerHTML = calcScreen1.innerHTML + " + ";
                calcScreen2.innerHTML = nmbr1 + nmbr2;
                operActive = false;
                newNum = true;
                console.log("Operator Active?: " + operActive);
                console.log("New Number Active?: " + newNum);
            } else if (buttonOper === '-') {
                nmbr2 = nmbr2 - parseFloat(calcScreen2.innerHTML);
                console.log("Value 1: " + nmbr1);
                console.log("Value 2: " + nmbr2);
                calcScreen1.innerHTML = calcScreen1.innerHTML + calcScreen2.innerHTML;
                calcScreen1.innerHTML = calcScreen1.innerHTML + " - ";
                calcScreen2.innerHTML = nmbr1 - nmbr2;
                operActive = false;
                newNum = true;
                console.log("Operator Active?: " + operActive);
                console.log("New Number Active?: " + newNum);
            } else if (buttonOper === 'x') {
                nmbr2 = nmbr2 * parseFloat(calcScreen2.innerHTML);
                console.log("Value 1: " + nmbr1);
                console.log("Value 2: " + nmbr2);
                calcScreen1.innerHTML = calcScreen1.innerHTML + calcScreen2.innerHTML;
                calcScreen1.innerHTML = calcScreen1.innerHTML + " x ";
                calcScreen2.innerHTML = nmbr1 * nmbr2;
                operActive = false;
                newNum = true;
                console.log("Operator Active?: " + operActive);
                console.log("New Number Active?: " + newNum);
            } else if (buttonOper === '/') {
                nmbr2 = nmbr2 / parseFloat(calcScreen2.innerHTML);
                console.log("Value 1: " + nmbr1);
                console.log("Value 2: " + nmbr2);
                calcScreen1.innerHTML = calcScreen1.innerHTML + calcScreen2.innerHTML;
                calcScreen1.innerHTML = calcScreen1.innerHTML + " / ";
                calcScreen2.innerHTML = nmbr1 / nmbr2;
                operActive = false;
                newNum = true;
                console.log("Operator Active?: " + operActive);
                console.log("New Number Active?: " + newNum);
            } else {
                console.log("There was an error!");
            }
        } else {
            if (buttonOper === "+") {
                nmbr1 = nmbr1 + parseFloat(calcScreen2.innerHTML);
                console.log("Value 1: " + nmbr1);
                console.log("Value 2: " + nmbr2);
                calcScreen1.innerHTML = calcScreen1.innerHTML + calcScreen2.innerHTML;
                calcScreen1.innerHTML = calcScreen1.innerHTML + " + ";
                calcScreen2.innerHTML = nmbr1 + nmbr2;
                operActive = false;
                newNum = true;
                console.log("Operator Active?: " + operActive);
                console.log("New Number Active?: " + newNum);
            } else if (buttonOper === '-') {
                nmbr1 = nmbr1 - parseFloat(calcScreen2.innerHTML);
                console.log("Value 1: " + nmbr1);
                console.log("Value 2: " + nmbr2);
                calcScreen1.innerHTML = calcScreen1.innerHTML + calcScreen2.innerHTML;
                calcScreen1.innerHTML = calcScreen1.innerHTML + " - ";
                calcScreen2.innerHTML = nmbr1 - nmbr2;
                operActive = false;
                newNum = true;
                console.log("Operator Active?: " + operActive);
                console.log("New Number Active?: " + newNum);
            } else if (buttonOper === 'x') {
                nmbr1 = nmbr1 * parseFloat(calcScreen2.innerHTML);
                console.log("Value 1: " + nmbr1);
                console.log("Value 2: " + nmbr2);
                calcScreen1.innerHTML = calcScreen1.innerHTML + calcScreen2.innerHTML;
                calcScreen1.innerHTML = calcScreen1.innerHTML + " x ";
                calcScreen2.innerHTML = nmbr1 * nmbr2;
                operActive = false;
                newNum = true;
                console.log("Operator Active?: " + operActive);
                console.log("New Number Active?: " + newNum);
            } else if (buttonOper === '/') {
                nmbr1 = nmbr1 / parseFloat(calcScreen2.innerHTML);
                console.log("Value 1: " + nmbr1);
                console.log("Value 2: " + nmbr2);
                calcScreen1.innerHTML = calcScreen1.innerHTML + calcScreen2.innerHTML;
                calcScreen1.innerHTML = calcScreen1.innerHTML + " / ";
                calcScreen2.innerHTML = nmbr1 / nmbr2;
                operActive = false;
                newNum = true;
                console.log("Operator Active?: " + operActive);
                console.log("New Number Active?: " + newNum);
            } else {
                console.log("There was an error!");
            }   
        }
    });
});

nmbrBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        let buttonText = this.textContent;
        if (calcScreen2.innerHTML === "0") {
            calcScreen2.innerHTML = "";
            calcScreen2.innerHTML = buttonText;
        } else if (newNum && operActive) {
            newNum = false;
            console.log("New Number Active?: " + newNum)
            calcScreen2.innerHTML = "";
            calcScreen2.innerHTML += buttonText;
        } else if (newNum && !operActive) {
            newNum = false;
            calcScreen2.innerHTML = "";
            calcScreen2.innerHTML += buttonText;
        } else {
            newNum = false;
            calcScreen2.innerHTML += buttonText;
        }
    });
});
