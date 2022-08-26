# # def add_nums(num1 , num2):
# #     num3 = 5
# #     return num1 + num2 + num3

# # print(add_nums(5,7))

# # for item in enumerate():

# from re import S
# from pytest import console_main


# def groceries():
#     g_list = ['tomatos', 'potatos', 'bread']
#     for idx, item in enumerate(g_list):
#         print(idx)
#         print(item)


# first_name = "Cody"
# last_name = "Suggs"
# age = 29

# # message = "Hello my name is %s %s %s" % (first_name, last_name, age)
# # message = "Hello my name is {} {}" .format(first_name, last_name)
# # message = "Hello my name is {} {} and I am {} years old." .format(first_name,last_name,age)
# # message = "Hello my name is " + first_name + last_name + " and I am " + str(age) + " years old."
# message = f"Hello my name is {first_name} {last_name} and I am {age} years old"


# print(message)

# list_of_bros = ['Tyler', 'Joe']

# list_of_bros.append('Billy Bob')
# list_of_bros.append(56)
# list_of_bros[2] = 'Curtis'
# list_of_bros.append('Joe Shmo')


# unwanted_number = list_of_bros.pop(3)

# print(list_of_bros[1:3])
# print(unwanted_number)

# fullname = "Cody Suggs"
# print(fullname[-2:])

# person = ('cody', 'suggs')

# list = []

# for item in person:
#     list.append(item)

# list[0] = "Joe"
# print(person)

# bros = ['billy bob', 'tyler', 'joe', 'curtis']

# for item in bros:
#     if item == 'tyler':
#         print("he is the best")
#     elif item == 'joe':
#         print("He is the middle and trouble maker")
#     else:
#         print("This is an else statement")

# person = {
#     'first_name': 'tyler',
#     'last_name': 'tbo',
#     'age': 33
# }
# print(person['last_name'])

# person['last_name'] = "thibault"

# print(person['last_name'])

# person['fav_color'] = 'green'

# print(person)

# person['fav_color2'] = 'blue'

# print(person)

# 1
# person.clear()

# 2
# thing_removed = person.pop('fav_color')

# 3
# del person['fav_color']


brothers = [
    {
        'first_name': 'tyler',
        'last_name': 'tbo',
        'age': 33,
        'fav_color': ['green', 'black'],
        'car':{
            'make': 'GMC',
            'model': 'Sierra',
            'year': 2016
        }
    },
    {
        'first_name': 'joe',
        'last_name': 'tbo',
        'age': 33,
        'fav_color': ['green', 'white']
    },
    {
        'first_name': 'curtis',
        'last_name': 'tbo',
        'age': 33,
        'fav_color': ['blue']
    }
]

print(brothers[0]['fav_color'][0])
print(brothers[0]['car']['year'])

for dictionary in brothers:
    all_keys = dictionary.keys()
    print(all_keys)

    all_vals = dictionary.values()
    print(all_vals)
    for key in dictionary:
        print(key)

# a function is what IT RETURNS

# # parameters (are variables)


# def add_nums(num1=5, num2=7):
#     return num1 + num2


# # arguments
# print(add_nums(8, 7))
# print(add_nums(87654, 7))
# print(add_nums(num2=10))
# # calling the name of an argument, anything to the right of it also needs to be named

