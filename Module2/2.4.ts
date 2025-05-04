{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const res1 = createArray("next");

  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  const re2 = createArrayWithGenerics<string>("next");
  const re3 = createArrayWithGenerics<number>(10);

  const re4 = createArrayWithGenerics<boolean>(true);

  type user = {
    name: string;
    age: number;
  };
  const re5 = createArrayWithGenerics<user>({
    name: "next",
    age: 10,
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "next level";
    return {
      ...student,
      course,
      };
      
      const student1 = addCourseToStudent({name: "next", age: 10});
      const student2 = addCourseToStudent({name: "next", age: 10, course: "next level"});
  };
}
