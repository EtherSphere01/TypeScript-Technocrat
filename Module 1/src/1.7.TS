{
  // SPREAD OPERATOR
  // rest operator
  // destructuring

  // spread operator

  const bros: string[] = ["John", "Doe", "Smith"];

  const bros2: string[] = ["Naimur", "Sakib", "Shakib", ...bros];

  const mentor1 = {
    name: "Naimur",
    age: 23,
  };
  const mentor2 = {
    name: "Sakib",
    age: 23,
  };

  const allMentors = {
    ...mentor1,
    ...mentor2,
    location: "Dhaka",
    country: "Bangladesh",
  };

  // rest operator

  const greetings = (...names: string[]): string => {
    return `Hello ${names.join(", ")}`;
  };

  console.log(greetings("Naimur", "Sakib", "Shakib"));

  // destructuring

  const user = {
    name: "Naimur",
    age: 23,
    location: "Dhaka",
  };
  const { name, age, location } = user; // object destructuring

  const [first, second, third] = bros; // array destructuring
}
