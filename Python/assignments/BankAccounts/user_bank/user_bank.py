class BankAccount:
    def __init__(self, balance=0, int_rate=0.01):
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

# cody = BankAccount()
# guy = BankAccount()

# cody.deposit(50).deposit(500.75).deposit(4000.25).withdraw(580).yield_interest().display_account_info()
# guy.deposit(5000).deposit(5000).withdraw(100).withdraw(100).withdraw(100).withdraw(100).yield_interest().display_account_info()



class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.account = BankAccount(int_rate=0.02, balance=0)
        self.is_reward_member = False
        self.gold_card_points = 0

    def display_info(self):
        print("*"*80)
        print(f"first_name: {self.first_name}")
        print(f"last_name: {self.last_name}")
        print(f"email: {self.email}")
        print(f"age: {self.age}")
        print(f"is_reward_member: {self.is_reward_member}")
        print(f"gold_card_points: {self.gold_card_points}")
        print(f"account: {self.account}")
        print("*"*80)
        return self

    def enroll(self):
        self.is_reward_member = True
        self.gold_card_points = 200
        return self

    def spend_points(self, amount:int, direction='down'):
        if direction == 'up':
            self.gold_card_points = self.gold_card_points + amount
            print(f"Hello, {self.first_name}, you now have {self.gold_card_points} points")
        elif self.gold_card_points - amount <0:
            print(f"Hello, {self.first_name}, You dont have enough points to spend.")
        elif direction == 'down':
            self.gold_card_points = self.gold_card_points - amount
            print(f"Hello, {self.first_name}, you have spent {amount} points, you have {self.gold_card_points} points remaining")
        else:
            print("direction invalid")
        return self

    # @staticmethod
    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self

    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self

    def display_user_balance(self):
        print(f"Your current account balance is: {self.account.balance}")



cody = User('cody', 'suggs', 'cody.suggs@email.com', 29)
guy = User('guy','sensei', 'guy.sensei@email.com', 44)
gal = User('gal','smith', 'gal.smith@email.com', 28)

cody.make_deposit(500).make_withdrawal(25).display_user_balance()
cody.display_info()