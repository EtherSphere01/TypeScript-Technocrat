{
    // type assertion
    let anything: any;
    anything = "next level";
    (anything as string).length; // 11
     
    const value = (value: string | number):string|number|undefined=> {
        if (typeof value === "string") {
            return value.length;
        } else {
            return value.toString().length;
        }
    }

    const result1 = value("next level") as string;
    const result2 = value(123) as number;

}