{
  class BankAccount {
    readonly id: number;
    name: string;
    private balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    setBalance(balance: number) {
      this.balance = balance;
      }
      set Balance(balance: number) {
        this.balance = balance;
      }
        get Balance() {
            return this.balance;
        }
  }

  const goribManush = new BankAccount(1, "Gorib", 1000);
  // Error: Cannot assign to 'id' because it is a read-only property.
    goribManush.setBalance(2000); // ok
    
    goribManush.Balance = 2000; // ok
    goribManush.Balance = 3000; // ok
    console.log(goribManush.Balance); // 3000
}
