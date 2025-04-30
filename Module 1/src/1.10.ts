{
  //union type

  let id: string | number = 12345; // id can be string or number
  id = "12345"; // id can be string or number
  id = 12345; // id can be string or number

  type User = {
    name: string;
    age: number;
    gender: "male" | "female";
    number?: string;
  };

  const user1: User = {
    name: "Naimur",
    age: 23,
    gender: "male",
    number: "01700000000",
  };

  // union type with object

  type FrontendDev = {
    name: string;
    skills: string[];
    designation1: "frontend";
  };

  type BackendDev = {
    name: string;
    skills: string[];
    designation2: "backend";
  };

  type FullStackDev = FrontendDev & BackendDev;

  const dev1: FullStackDev = {
    name: "Naimur",
    skills: ["HTML", "CSS", "JavaScript", "Node.js"],
    designation1: "frontend",
    designation2: "backend",
  };
}
