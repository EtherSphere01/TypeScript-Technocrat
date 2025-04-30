// function

// normal function
// arrow function

// Normal function

function add(x: number, y: number): number {
  return x + y;
}

// Arrow function

const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

// object -> function -> method

const poorUser = {
  name: "Naimur",
  balance: 0,
  addBalance(balance: number): string {
    return `my balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = arr.map((num: number): number => num * num);
