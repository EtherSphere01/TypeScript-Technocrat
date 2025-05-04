{
  // Type Guards

  // typeof --> type guard

  const add = (
    param1: string | number,
    param2: string | number
  ): string | number => {
    if (typeof param1 === "string" && typeof param2 === "string") {
      return param1 + param2;
    } else if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return "Invalid parameters";
    }
  };

  const res1 = add(10, 20); // 30
  const res2 = add("Hello", "World"); // HelloWorld
  const res3 = add(10, "World"); // Invalid parameters

  // in guard --> type guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    user.name; // ok
    if ("role" in user) {
      user.role; // ok
    }
  };

  // instanceof guard --> type guard

  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log(`${this.name} the ${this.species} makes a sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log(`${this.name} the ${this.species} barks`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeow() {
      console.log(`${this.name} the ${this.species} meows`);
    }
  }
  // smart way to use instanceof guard

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnima = (animal: Animal) => {
    animal.makeSound(); // ok
    if (isDog(animal)) {
      animal.makeBark(); // ok
    } else if (isCat(animal)) {
      animal.makeMeow(); // ok
    }
  };

  const dog = new Dog("Dog", "Canine");
  const cat = new Cat("Cat", "Feline");
}
