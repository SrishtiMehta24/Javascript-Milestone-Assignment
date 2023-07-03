const customer = {
    name: 'Srishti',
    balance: 1000,

    deposit: function(amount) {
      this.balance += amount;
      console.log(`Deposit of $${amount} successful. New balance: $${this.balance}`);
    },
  
    withdraw: function(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawal of $${amount} successful. New balance: $${this.balance}`);
      } else {
        console.log(`Insufficient funds. Current balance: $${this.balance}`);
      }
    }
};
  
console.log(`Customer: ${customer.name}`);
console.log(`Initial balance: $${customer.balance}`);
  
customer.deposit(500); // Deposit $500
customer.withdraw(200); // Withdraw $200
customer.withdraw(1500); // Withdraw $1500 (insufficient funds)
  