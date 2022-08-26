

class Human:
    planet = "Earth"
    def __init__(self, data:dict):
        # These are the attributes of  weight,the class
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.height = data['height']
        self.weight = data['weight']
        self.gender = data['gender']
        self.health = data['health']

    def info(self):
        print("*"*80)
        print(f"first_name: {self.first_name}")
        print(f"last_name: {self.last_name}")
        print(f"age: {self.age}")
        print(f"height: {self.height}")
        print(f"weight: {self.weight}")
        print(f"gender: {self.gender}")
        print(f"health: {self.health}")
        return self

    def punch(self, person):
        person.change_health(-1)
        return self

    def change_health(self, person):
        self.health += amount
        return self
        
    # Methods -> actions
    def say_name(self):
        print(f"My name is {self.first_name} {self.last_name},")
        return self

    def change_weight(self, amount: int, direction='up'):
        # current weight - amount
        if direction == 'up':
            self.weight = self.weight + amount
        elif direction == 'down':
            self.weight = self.weight - amount
        else:
            print("that is not a valid direction")
            return self

    @classmethod
    def change_planets(cls, planet):
        cls.planet = planet
        return cls

    @staticmethod
    def validator(data):
        is_valid = True

        if len(data['first_name']) < 1:
            print("you need a first name")
            is_valid = False

        if len(data['last_name']) < 1:
            print("you need a last name")
            is_valid = False
        
        return is_valid

# tyler = Human('tyler', 'tbo', 33, "5'8\"", 198, 'male', 100)
# kyle = Human('kyle', 'marymee', 27, "5'11\"", 200, 'male', 100)

people = [
    {
        'first_name': 'tyler',
        'last_name': 'tbo',
        'age': '33',
        'height': '5\'8"',
        'weight': '198',
        'gender': 'male',
        'health': 100,
    },
    {
        'first_name': 'kyle',
        'last_name': 'marymee',
        'age': '27',
        'height': '5\'11"',
        'weight': '200',
        'gender': 'male',
        'health': 100,
    }
]

# print(tyler.age)
# print(kyle.age)
# tyler.say_name()
# kyle.say_name()
# print(tyler.weight)
# tyler.change_weight(30)
# print(tyler.weight)
# print(tyler.weight)
# tyler.change_weight(30)
# print(tyler.weight)

# # tyler.change_weight(30, 'down')
# tyler.info()
# kyle.punch(tyler)

# print(tyler.planet)
# print(kyle.planet)

# Human.change_planets("simosis 1")

# print(tyler.planet)
# print(kyle.planet)
all_people = []

for person in people:
    is_valid = Human.validator(person)

    if is_valid:
        temp_person = Human(person)
        all_people.append(temp_person)

for person in all_people:
    person.info()

print(all_people)