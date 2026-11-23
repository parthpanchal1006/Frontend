let balance = 5000;

class Bank {
  checkBalance() {
    console.log("Current Balance: ₹" + balance);
  }

  deposit(amount) {
    balance = balance + amount;
    console.log("Deposit: ₹" + amount);
    console.log("New Balance: ₹" + balance);
  }

  withdraw(amount) {
    if (amount <= balance) {
      balance = balance - amount;
      console.log("Withdraw: ₹" + amount);
      console.log("Remaining Balance: ₹" + balance);
    } else {
      console.log("Insufficient Balance");
    }
  }
}

let obj = new Bank();

obj.checkBalance();
obj.deposit(2000);
obj.withdraw(1000);
obj.checkBalance();
