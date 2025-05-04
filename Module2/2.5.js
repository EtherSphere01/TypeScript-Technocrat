"use strict";
{
    // constraints -> means force or enforcement
    const addCourseToStudent = (student) => {
        const course = "next level";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ id: 10, name: "next", age: 10, email: "naimur@gmail.com" });
    const student2 = addCourseToStudent({
        id: 12,
        name: "next",
        age: 10,
        course: "next level",
        email: "naimur@gmail.com",
    });
}
