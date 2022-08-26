class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
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



cody = User('cody', 'suggs', 'cody.suggs@email.com', 29)
guy = User('guy','sensei', 'guy.sensei@email.com', 44)
gal = User('gal','smith', 'gal.smith@email.com', 28)


cody.enroll().spend_points(50).display_info()
guy.enroll().spend_points(80).display_info()
gal.spend_points(40).display_info()


