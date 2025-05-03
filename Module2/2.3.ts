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
  const user: genericArray<{ name: string; age: number }> = [
    { name: "next", age: 10 },
    { name: "level", age: 20 },
  ];

  // generic tuple
  type genericTuple<T, U> = [T, U];
  const user1: genericTuple<string, number> = ["next", 10];

  type User = {
    name: string;
    age: number;
  };
  const user2: genericTuple<string, string> = ["next", "level"];
  const user3: genericTuple<number, User> = [10, { name: "next", age: 10 }];

  // using interface
  interface Developer<T> {
    name: string;
    age: number;
    computer: {
      brand: string;
      price: number;
    };
    smartWatch: T;
  }

    
    type samsungWatch = {
        brand: string;
        price: number;
        model: string;
        sensor: string;
    }
  const poorDeveloper: Developer<object> = {
    name: "Naimur Rahman",
    age: 25,
    computer: {
      brand: "Asus",
      price: 1000,
    },
    smartWatch: {
      brand: "Apple",
      price: 500,
      model: "Apple Watch Series 7",
    },
  };

  const richDeveloper: Developer<samsungWatch> = {
    name: "Naimur Rahman",
    age: 25,
    computer: {
      brand: "Asus",
      price: 1000,
    },
    smartWatch: {
      brand: "Samsung",
      price: 500,
      model: "Samsung Galaxy Watch 4",
      sensor: "Heart Rate Monitor",
    }, j
  };
}
