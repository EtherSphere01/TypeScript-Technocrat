{
  // Encapsulation
  class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    public getName(): string {
      return this.name;
    }

    public getAge(): number {
      return this.age;
    }

    public setName(name: string): void {
      this.name = name;
    }

    public setAge(age: number): void {
      this.age = age;
    }
  }

  const person = new Person("John", 30);
  console.log(person.getName()); // John
  console.log(person.getAge()); // 30
}
