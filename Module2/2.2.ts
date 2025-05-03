{
    // interface

    interface user2 {
        name: string;
        age: number;    
    }

    const user1: user2 = {
        name: "next level",
        age: 10
    }

    type userWithRole1 = user2 & { role: string };
    
    const user2: userWithRole1 = {
        name: "next level",
        age: 10,
        role: "admin"
    }

    interface newuser extends user2 {
        role: string;
    }
    const user3: newuser = {
        name: "next level",
        age: 10,
        role: "admin"
    }

    interface roll2 {
        [index: number]: number;
    }
    const rollNumber2: roll2 = [1, 2, 3, 4, 5];
    
    type add = (number1: number, number2: number) => number;
    const add1 : add = (number1, number2) => {
        return number1 + number2;
    }

    interface add2{(number1: number, number2: number): number};
    const add3: add2 = (number1, number2) => {
        return number1 + number2;
    }
}