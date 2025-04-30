{
  // type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    number?: string;
    address: string;
  };

  const student1: Student = {
    name: "Naimur",
    age: 23,
    gender: "male",
    number: "01700000000",
    address: "Dhaka",
  };

  const student2: Student = {
    name: "Sakib",
    age: 23,
    gender: "male",
    address: "Dhaka",
  };

  type UserName = string;
  const userName: UserName = "Naimur"; // string type alias

  // function type alias
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => {
    return num1 + num2;
  };
}
