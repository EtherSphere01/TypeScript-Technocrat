{
  // inheritance in TypeScript

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} sleeps for ${numberOfHours} hours`);
    }
  }

  class Student extends Parent {
    studentId: number;

    constructor(name: string, age: number, address: string, studentId: number) {
      super(name, age, address); // call the constructor of the parent class
      this.studentId = studentId;
    }
  }

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address); // call the constructor of the parent class

      this.designation = designation;
    }

    takeClass(className: string) {
      console.log(`${this.name} is taking ${className} class`);
    }
  }

    const student1 = new Student("John", 20, "123 Main St", 12345);
    
    const teacher1 = new Teacher("Jane", 30, "456 Elm St", "Math Teacher");
    teacher1.takeClass("Math"); // Jane is taking Math class
    student1.getSleep(8); // John sleeps for 8 hours
}
