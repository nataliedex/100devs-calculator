// *************HTML/CSS VALUES********************
const displayScreen = document.getElementById("display-screen");
const buttons = document.querySelectorAll(".button");
const number = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");

const clear = document.getElementById("clear");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

const equal = document.getElementById("equal");
const addition = document.getElementById("addition");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const decimal = document.getElementById("decimal");


// **************NUMBERS***************
const numbers = [
    {name: one, value: 1},
    {name: two, value: 2},
    {name: three, value: 3},
    {name: four, value: 4},
    {name: five, value: 5},
    {name: six, value: 6},
    {name: seven, value: 7},
    {name: eight, value: 8},
    {name: nine, value: 9},
    {name: zero, value: 0},
    {name: decimal, value: "."},
];
const operators = [
    {name: addition, value: "+"},
    {name: subtract, value: "-"},
    {name: multiply, value: "*"},
    {name: divide, value: "/"},
    {name: equal, value: "="},
    
];

// ***************FORMULAS***********
let total = [];

clear.addEventListener("click", () => {
    total = "";
    displayScreen.innerHTML = total;
});

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
        
//         console.log(button.id);
//     });
// });

function Calculation(firstValue, operation, secondValue){
    this.firstValue = firstValue;
    this.operation = operation;
    this.secondValue = secondValue;
    this.calc = function(){
        equal.addEventListener("click", () => {
            console.log("Calculating...");
        });
    }
}


    number.forEach(n => {
        n.addEventListener("click", () => {
            let num = n.id;
            console.log(num);
            let x = numbers.find(value => name === num);
            console.log(x);
        });
    });
    






