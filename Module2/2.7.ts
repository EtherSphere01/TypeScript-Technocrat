{
  // generic constraints with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  const user = {
    name: "next",
    age: 10,
    address: "Dhaka",
  };

  type Owner = "bike" | "car" | "ship"; // manually
  type Owner2 = keyof Vehicle; // automatically

  const person1: Owner = "car";
  const person2: Owner2 = "bike";

  const getPropertyValue =<X,Y extends keyof X> (obj: X, key: Y ) => {
    return obj[key];
  };

  const result = getPropertyValue(user, "name");
}
