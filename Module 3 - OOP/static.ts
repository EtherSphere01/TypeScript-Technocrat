{
  class Counter {
    count: number = 0;
    increment() {
      this.count++;
    }
    decrement() {
      this.count--;
    }
  }

  const instance = new Counter();
  console.log(instance.increment()); // 0 -> different memory location

  const instance2 = new Counter();
  console.log(instance2.increment()); // 0 -> different memory location

  // static method

  class Counter2 {
    static count: number = 0;
    increment() {
      Counter2.count++;
    }
    decrement() {
      Counter2.count--;
    }
    }
    
    const instance3 = new Counter2();
    console.log(instance3.increment()); // 0 -> same memory location
    const instance4 = new Counter2();
    console.log(instance4.increment()); // 1 -> same memory location
    console.log(instance3.increment()); // 2 -> same memory location
}
