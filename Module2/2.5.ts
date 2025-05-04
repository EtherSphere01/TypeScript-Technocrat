{
  // constraints -> means force or enforcement

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "next level";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    age: number;
    email: string;
  }>({ id: 10, name: "next", age: 10, email: "naimur@gmail.com" });
  const student2 = addCourseToStudent({
    id: 12,
    name: "next",
    age: 10,
    course: "next level",
    email: "naimur@gmail.com",
  });
}
