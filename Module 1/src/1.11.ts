{
  // ternary operator
  // optional chaining
  // nullish coalescing operator

  // ternary operator

  const age: number = 18;
  if (age >= 18) {
    console.log("You are an adult");
  } else {
    console.log("You are a minor");
  }

  // ternary operator
  const isAdult = age >= 18 ? "You are an adult" : "You are a minor";

  // nullish coalescing operator
  // null | undefined -> decision making
  const userName = null;
  const result = userName ?? "Guest"; // if userName is null or undefined, then result will be "Guest"
  console.log(result); // Guest

  type User = {
    name: string;
    address: {
      city: string;
      country: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user1: User = {
    name: "Naimur",
    address: {
      city: "Dhaka",
      country: "Bangladesh",
      road: "Road 1",
      presentAddress: "Present Address 1",
    },
  };

  const presentAddress =
    user1?.address?.permanentAddress ?? "No permanent address"; // if presentAddress is null or undefined, then presentAddress will be "No permanent address"
    console.log({ presentAddress }); // undefined
    


    // nullable chaining operator
    const user2: User = {
      name: "Sakib",
      address: {
        city: "Dhaka",
        country: "Bangladesh",
        road: "Road 1",
        presentAddress: "Present Address 1",
      },
    };
    const presentAddress2 = user2?.address?.permanentAddress ?? "No permanent address"; // if presentAddress is null or undefined, then presentAddress will be "No permanent address"

    // unknown type
    let userInput: unknown; // unknown type is a type-safe version of any type
    userInput = 123; // number
    userInput = "123"; // string
    userInput = true; // boolean
    userInput = null; // null
    userInput = undefined; // undefined
    userInput = {}; // object
    userInput = []; // array
    userInput = () => {}; // function
    userInput = Symbol("symbol"); // symbol
     
}
