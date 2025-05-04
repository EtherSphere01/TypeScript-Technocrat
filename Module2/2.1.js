"use strict";
{
    // type assertion
    let anything;
    anything = "next level";
    anything.length; // 11
    const value = (value) => {
        if (typeof value === "string") {
            return value.length;
        }
        else {
            return value.toString().length;
        }
    };
    const result1 = value("next level");
    const result2 = value(123);
}
