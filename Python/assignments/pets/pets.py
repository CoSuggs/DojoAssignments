

class Pet:
    def __init__(self, name, type, tricks, health, energy):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = health
        self.energy = energy
    
    def info(self):
        print("" * 80)
        attrs = vars(self)
        print(f"Type : {self.type}")
        for key in attrs:
            print(f"{key} : {attrs[key]}")
        print(""*80)
        return self
    
    def sleep(self):
        pass
    
    def eat(self):
        pass
    
    def play(self):
        pass
    
    def noise(self):
        pass