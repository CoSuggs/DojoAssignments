

class Ninja:
    def __init__(self, first_name, last_name, pet, treats, pet_food):
        self.first_name = first_name
        self.last_name = last_name
        self.pet = pet
        self.treats = treats
        self.pet_food = pet_food
        
    def info(self):
        print("" * 80)
        attrs = vars(self)
        print(f"Type : {self.type}")
        for key in attrs:
            print(f"{key} : {attrs[key]}")
        print(""*80)
        return self
        
    def walk(self,pet):
        pass
    
    def feed(self,pet):
        pass
    
    def bathe(self,pet):
        pass

