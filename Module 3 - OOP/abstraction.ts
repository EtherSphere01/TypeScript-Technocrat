{
  interface vehicle1 {
    name: string;
    model: string;
    startEngine(): void;
    stopEngine(): void;
  }

  const vehicle: vehicle1 = {
    name: "car",
    model: "toyota",
    startEngine: function () {
      console.log("Engine started");
    },
    stopEngine: function () {
      console.log("Engine stopped");
    },
  };
  console.log(vehicle.name); // car

  class car implements vehicle1 {
    name: string;
    model: string;
    constructor(name: string, model: string) {
      this.name = name;
      this.model = model;
    }
    startEngine() {
      console.log("Engine started");
    }
    stopEngine() {
      console.log("Engine stopped");
    }
  }

  const toyota = new car("toyota", "corolla");
  toyota.startEngine(); // Engine started
  toyota.stopEngine(); // Engine stopped

  // abstraction class

  interface vehicle2 {
    name: string;
    model: string;
    startEngine(): void;
    stopEngine(): void;
  }

  abstract class car2 {
    name: string;
    model: string;
    constructor(name: string, model: string) {
      this.name = name;
      this.model = model;
    }
    abstract startEngine();
    abstract stopEngine();
  }
  class toyota2 extends car2 {
    constructor(name: string, model: string) {
      super(name, model);
    }
    startEngine() {
      console.log("Engine started");
    }
    stopEngine() {
      console.log("Engine stopped");
    }
  }
}
