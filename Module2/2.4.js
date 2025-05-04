"use strict";
{
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const res1 = createArray("next");
    const createArrayWithGenerics = (param) => {
        return [param];
    };
    const re2 = createArrayWithGenerics("next");
    const re3 = createArrayWithGenerics(10);
    const re4 = createArrayWithGenerics(true);
    const re5 = createArrayWithGenerics({
        name: "next",
        age: 10,
    });
    const addCourseToStudent = (student) => {
        const course = "next level";
        return Object.assign(Object.assign({}, student), { course });
        const student1 = addCourseToStudent({ name: "next", age: 10 });
        const student2 = addCourseToStudent({ name: "next", age: 10, course: "next level" });
    };
}
