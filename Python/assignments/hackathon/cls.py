import random


class Character:
    all_charachters = []
    type = "Generic"

    def __init__(self, name, strength, speed, health):
        self.name = name
        self.strength = strength
        self.speed = speed
        self.health = health
        Character.all_charachters.append(self)

    def info(self):
        print("" * 80)
        attrs = vars(self)
        print(f"Type : {self.type}")
        for key in attrs:
            print(f"{key} : {attrs[key]}")
        print(""*80)
        return self

    def show_health(self):
        print(f"{self.name}'s health is currently {self.health}")
        return self

    def attack(self, defender, type="punch"):
        random_damage = random.randint(0, self.strength)
        damage = (self.strength * 0.1 + 5) * -1
        print(f"{self.name} attacks {defender.name} for {damage} damage using a {type}")
        defender.change_health(damage)
        return self

    def change_health(self, damage):
        self.health = self.health + damage
        return self.health

    # def turn_order(self, defender):
    #     random_speed = random.randint(0, self.speed)
    #     if random_speed > defender.speed:
    #         print(f"{self.name} attacks first")
    #         self.attack(defender)
    #     elif random_speed == defender.speed:
    #         print(f"They clashed")
    #     else:
    #         print(f"{defender.name} attacks first")
    #         defender.attack(self)
    #     return self

    def initiative(self, defender):
        while self.health > 0 and defender.health > 0:
            init = random.randint(0, self.speed)
            init2 = random.randint(0, defender.speed)
            if init > init2:
                print(f"{self.name} attacks!")
                self.attack(defender)
                self.show_health()
                defender.show_health()
            elif init < init2:
                print(f"{defender.name} attacks!")
                defender.attack(self)
                self.show_health()
                defender.show_health()
            else:
                print(f"{self.name} and {defender.name} clash!")
            if self.health <= 0:
                print(f"{defender.name} wins!")
            elif defender.health <= 0:
                print(f"{self.name} wins!")
        return self
    
    # def rounds(self, defender):
    #     i = 1
    #     while i < 25:
    #         print("This is round" + "i")
    #         i++
    #     if self.health or defender.health > 0:
    #         self.turn_order

    @classmethod
    def show_stats(cls):
        for char in cls.all_charachters:
            char.info()
        return cls


class Ninja(Character):
    type = "Ninja"

    def __init__(self, name, strength=100, speed=70, health=1000):
        super().__init__(name, strength, speed, health)


class Pirate(Character):
    type = "Pirate"

    def __init__(self, name, strength=150, speed=50, health=1000):
        super().__init__(name, strength, speed, health)


c1 = Ninja('Naruto')
c2 = Pirate('Luffy')

c1.initiative(c2)
c1.show_health()
c2.show_health()


# Psuedo Code
# turn order determins who attacks first each round
# once turn order is decided, faster character attacks slower character then ->
# slower character attacks back
# repeat until one characters HP = 0
