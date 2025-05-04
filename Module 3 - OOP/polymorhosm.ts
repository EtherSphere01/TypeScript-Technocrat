{
  // polymorphism is the ability of different classes to be treated as instances of the same class through a common interface.

  class person {
    getSleep() {
      console.log("Person sleeps for 8 hours");
    }
  }

  class student extends person {
    getSleep() {
      console.log("Student sleeps for 6 hours");
    }
    }
    
    const getSleepingHours = (person: person) => {
        person.getSleep(); //
    }

    const person1 = new person();
    const person2 = new student();
    console.log(getSleepingHours(person1)); // Person sleeps for 8 hours
    console.log(getSleepingHours(person2)); // Student sleeps for 6 hours
}
