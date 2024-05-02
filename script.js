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
let nmbr2 = 1;
let oper = "";

// Event Listener List
clearBtn.addEventListener("click", () => {
    calcScreen1.innerHTML = "";
    calcScreen2.innerHTML = "0";
});

zeroBtn.addEventListener("click", () => {
    if (calcScreen2.innerHTML === "0") {
        // Left blank to stop "0" being entered multiple times after using Clear
    } else {
        calcScreen2.innerHTML = calcScreen2.innerHTML + "0";
    }
});

oneBtn.addEventListener("click", () => {
    if (calcScreen2.innerHTML === "0") {
        calcScreen2.innerHTML = "";
        calcScreen2.innerHTML = "1";
    } else {
        calcScreen2.innerHTML = calcScreen2.innerHTML + "1";
    }
});

twoBtn.addEventListener("click", () => {
    if (calcScreen2.innerHTML === "0") {
        calcScreen2.innerHTML = "";
        calcScreen2.innerHTML = "2";
    } else {
        calcScreen2.innerHTML = calcScreen2.innerHTML + "2";
    }
});

threeBtn.addEventListener("click", () => {
    if (calcScreen2.innerHTML === "0") {
        calcScreen2.innerHTML = "";
        calcScreen2.innerHTML = "3";
    } else {
        calcScreen2.innerHTML = calcScreen2.innerHTML + "3";
    }
});

fourBtn.addEventListener("click", () => {
    if (calcScreen2.innerHTML === "0") {
        calcScreen2.innerHTML = "";
        calcScreen2.innerHTML = "4";
    } else {
        calcScreen2.innerHTML = calcScreen2.innerHTML + "4";
    }
});

fiveBtn.addEventListener("click", () => {
    if (calcScreen2.innerHTML === "0") {
        calcScreen2.innerHTML = "";
        calcScreen2.innerHTML = "5";
    } else {
        calcScreen2.innerHTML = calcScreen2.innerHTML + "5";
    }
});

sixBtn.addEventListener("click", () => {
    if (calcScreen2.innerHTML === "0") {
        calcScreen2.innerHTML = "";
        calcScreen2.innerHTML = "6";
    } else {
        calcScreen2.innerHTML = calcScreen2.innerHTML + "6";
    }
});

sevenBtn.addEventListener("click", () => {
    if (calcScreen2.innerHTML === "0") {
        calcScreen2.innerHTML = "";
        calcScreen2.innerHTML = "7";
    } else {
        calcScreen2.innerHTML = calcScreen2.innerHTML + "7";
    }
});

eightBtn.addEventListener("click", () => {
    if (calcScreen2.innerHTML === "0") {
        calcScreen2.innerHTML = "";
        calcScreen2.innerHTML = "8";
    } else {
        calcScreen2.innerHTML = calcScreen2.innerHTML + "8";
    }
});

nineBtn.addEventListener("click", () => {
    if (calcScreen2.innerHTML === "0") {
        calcScreen2.innerHTML = "";
        calcScreen2.innerHTML = "9";
    } else {
        calcScreen2.innerHTML = calcScreen2.innerHTML + "9";
    }
});

decimalBtn.addEventListener("click", () => {
    if (calcScreen2.innerHTML.includes(".")) {
        // Left blank to not include another "." if one already exists
    } else {
        calcScreen2.innerHTML = calcScreen2.innerHTML + ".";
    }
});

addBtn.addEventListener("click", () => {
    if (calcScreen2.innerHTML === "0") {
        // Left blank to stop "0" being entered to calcscreen1 after using a function
    } else {
        nmbr1 = parseFloat(calcScreen2.innerHTML);
        oper = "+";
        calcScreen1.innerHTML = calcScreen1.innerHTML + calcScreen2.innerHTML;
        calcScreen1.innerHTML = calcScreen1.innerHTML + " + ";
    
        // calcScreen2.innerHTML = nmbr1 + nmbr2;
    }
});

equalsBtn.addEventListener("click", () => {
    let result = nmbr1 + oper + nmbr2;
    calcScreen2.innerHTML = parseFloat(result);
});