"use strict";
// function
// normal function
// arrow function
// Normal function
function add(x, y) {
    return x + y;
}
// Arrow function
const addArrow = (num1, num2) => {
    return num1 + num2;
};
// object -> function -> method
const poorUser = {
    name: "Naimur",
    balance: 0,
    addBalance(balance) {
        return `my balance is ${this.balance + balance}`;
    },
};
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map((num) => num * num);
