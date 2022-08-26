import random
from typing_extensions import Self

class Character:
    all_charachters = []
    type = "generic"
    def __init__(self, name, health, attack_pwr, defense_pwr, speed, morale):
        self.name = name
        self.health = health
        self.attack_pwr = attack_pwr
        self.defense_pwr = defense_pwr
        self.speed = speed
        self.morale = morale
        Character.all_charachters.append(self)

    def info(self):
        attrs = vars(self)
        print(f"Type : {self.type}")
        for key in attrs:
            print(f"{key} : {attrs[key]}")
        return self

    def battle_cry(slef):
        print(f"{self.name} I am generic!!!!")
        return self

    def attack(self, attackee, type="punch"):
        random_damage = random.randint(0, self.attack_pwr)
        damage = (self.attack_pwr * 0.1 + 5) * -1
        print(f"{self.name} attacks {attackee.name} for {damage} damage using a {type}")
        attackee.change_health(damage)

    def change_health(self, health):
        self.health += amount 
        return self

    def defense(self):
        pass

    @classmethod
    def show_stats(cls):
        for char in cls.all_charachters:
            char.info()
        return cls

class Halfling(Character):
    type = "Halfling"
    def __init__(self, name, health=100, attack_pwr=8, defense_pwr=10, speed=14, morale=1):
        super().__init__(self, name, health, attack_pwr, defense_pwr, speed, morale)

    def battle_cry(slef):
        print(f"{self.name} is running away")
        return self

class Orc(Character):
    type = "Orc"
    def __init__(self, name, health=150, attack_pwr=12, defense_pwr=10, speed=5, morale=-1) -> None:
        super().__init__(self, name, health, attack_pwr, defense_pwr, speed, morale)

    def battle_cry(slef):
        print(f"ATTACK!!!")
        return self





