{
  // oop - class

  class Animal {
    //   by default, class members are public

    // name: string;
    // species: string;
    // sound: string;

    //   parameter properties
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }
    makeSound() {
      console.log(`${this.name} the ${this.species} says ${this.sound}`);
    }
  }

  const dog = new Animal("Dog", "Canine", "Bark");
  const cat = new Animal("Cat", "Feline", "Meow");

  dog.makeSound(); // Dog the Canine says Bark
  cat.makeSound(); // Cat the Feline says Meow
}
