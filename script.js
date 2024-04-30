// Query Selector List
let calcScreen = document.querySelector(".calc-screen");
let zeroBtn = document.querySelector(".zero-btn");
let oneBtn = document.querySelector(".one-btn");
let twoBtn = document.querySelector(".two-btn");
let threeBtn = document.querySelector(".three-btn");
let fourBtn = document.querySelector(".four-btn");
let fiveBtn = document.querySelector(".five-btn");
let sixBtn = document.querySelector(".six-btn");
let sevenBtn = document.querySelector(".seven-btn");
let eightBtn = document.querySelector(".eight-btn");
let nineBtn = document.querySelector(".nine-btn");


zeroBtn.addEventListener("click", () => {
    calcScreen.innerHTML = "0";
});

oneBtn.addEventListener("click", () => {
    calcScreen.innerHTML = "1";
});