class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, balance=0, int_rate=0.01):
        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
        self.balance = balance
        self.int_rate = int_rate

    def deposit(self, amount: float):
        self.balance = self.balance + amount
        print(f"Your current balance is {self.balance}")
        return self

    def withdraw(self, amount: float):
        if BankAccount.can_withdraw(self.balance,amount):
            self.balance = self.balance - amount
            print(f"Your current balance is {self.balance}")
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance = self.balance - 5
            print(f"Your current balance is {self.balance}")
        return self

    def display_account_info(self):
        # your code here
        print("*"*80)
        print(f"balance: {self.balance}")
        print(f"int_rate: {self.int_rate}")
        print("*"*80)
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance = (self.balance * self.int_rate) + self.balance
            print(f"With interest, your current balance is {self.balance}")
        else:
            print("You don't have a balance to acrue interest.")
        return self

    @staticmethod
    def can_withdraw(balance,amount):
        if (balance - amount) < 0:
            return False
        else:
            return True

    # @staticmethod
    # def balance_greaterthan_zero(balance, int_rate):
    #     if balance > 0:
    #         return True
    #     else:
    #         return False


cody = BankAccount()
guy = BankAccount()

cody.deposit(50).deposit(500.75).deposit(4000.25).withdraw(580).yield_interest().display_account_info()
guy.deposit(5000).deposit(5000).withdraw(100).withdraw(100).withdraw(100).withdraw(100).yield_interest().display_account_info()
