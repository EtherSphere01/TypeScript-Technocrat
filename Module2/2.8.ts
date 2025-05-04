{
  // promises

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };
  const getTodo = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = response.json();

    console.log(data);
  };

  getTodo();

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("error");
      }
    });
  };

  // calling the promise;

  const showData = async () => {
    const data: string = await createPromise();
    console.log(data);
  };

  showData();

  // conditional types

  type a1 = null;
  type b1 = undefined;
  type x = a1 extends null ? true : false; // true
  type y = b1 extends null ? true : b1 extends undefined ? true : false; // true

  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString = {
    [key in "height" | "width"]: string; //manually defining the keys
  };

  type AreaSering1 = {
    [key in keyof AreaNumber]: boolean; // using the keys of AreaNumber
  };

  type AreaString2<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString2<{ height: string; width: number }> = {
    height: "true",
    width: 5,
  };

  // utility types

  type person = {
    name: string;
    age: number;
    email?: string;
    contact: string;
  };

  type Name = Pick<person, "name" | "age">; // pick the keys from person

  // Omit

  type OmitPerson = Omit<person, "name" | "age">; // omit the keys from person

  // require
  type RequirePerson = Required<person>; // make all the keys required

  // partial
  type PartialPerson = Partial<person>; // make all the keys optional

  // readonly
  type ReadonlyPerson = Readonly<person>; // make all the keys readonly

  // record
  type MyObj = Record<string, string>;
  const obj1: MyObj = {
    name: "John",
    age: "25",
    address: "USA",
  };
}
