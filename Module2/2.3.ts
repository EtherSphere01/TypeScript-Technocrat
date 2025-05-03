{
    // generic type

    const rollNumbers: number[] = [1, 2, 3, 4, 5];
    const mentors: string[] = ["next", "level"];
    const boolArray: boolean[] = [true, false, true];
    const rollNumbers2: Array<number> = [1, 2, 3, 4, 5];
    
    type genericArray<T> = Array<T>;
    const rollNumber: genericArray<number> = [1, 2, 3, 4, 5];
    const mentor: genericArray<string> = ["next", "level"];
    const bool: genericArray<boolean> = [true, false, true];
    const rollNumber2: genericArray<number> = [1, 2, 3, 4, 5];
    const user:genericArray<{name:string, age:number}> = [
        { name: "next", age: 10 },
        { name: "level", age: 20 }
    ]

    // generic tuple
    type genericTuple<T, U> = [T, U];
    const user1: genericTuple<string, number> = ["next", 10];

    type User = {
        name: string;
        age: number;
    }
    const user2: genericTuple<string, string> = ["next", "level"];
    const user3: genericTuple<number, User> = [10, { name: "next", age: 10 }];

    // using interface

 }