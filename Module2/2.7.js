"use strict";
{
    const user = {
        name: "next",
        age: 10,
        address: "Dhaka",
    };
    const person1 = "car";
    const person2 = "bike";
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const result = getPropertyValue(user, "name");
}
