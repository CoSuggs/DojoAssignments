num1 = 42 # variable decloration, int
num2 = 2.3 # variable decloration, float
boolean = True #variable decloration, bool
string = 'Hello World' #variable decloration, initialize string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # variable decloration, intialize list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # variable decloration, initialize dict
fruit = ('blueberry', 'strawberry', 'banana') #variable decloration, initialize tuple
print(type(fruit)) # log statement
print(pizza_toppings[1]) # log statement
pizza_toppings.append('Mushrooms') # add value
print(person['name']) # log statement
person['name'] = 'George' # change vale, dict
person['eye_color'] = 'blue' # change vale, dict
print(fruit[2]) # log statement

if num1 > 45: # conditional
    print("It's greater") # log statement
else: # conditional
    print("It's lower") # log statement

if len(string) < 5: # conditional
    print("It's a short word!") # log statement
elif len(string) > 15: # conditional
    print("It's a long word!") # log statement
else: # conditional
    print("Just right!") # log statement

for x in range(5): # for loop
    print(x) # log statement
for x in range(2,5): # for loop
    print(x) # log statement
for x in range(2,10,3): # for loop
    print(x) # log statement
x = 0
while(x < 5): # while loop
    print(x) # log statement
    x += 1

pizza_toppings.pop() # delete value, at the end
pizza_toppings.pop(1) # delete value in specific list postion

print(person) # log statement
person.pop('eye_color') # delete specific value
print(person) # log statement

for topping in pizza_toppings: # function
    if topping == 'Pepperoni': # conditional 
        continue # for loop, continue
    print('After 1st if statement') # log statement
    if topping == 'Olives': # conditional
        break # for loop, break

def print_hello_ten_times(): # function
    for num in range(10): # for loop
        print('Hello') # log statement

print_hello_ten_times() # function

def print_hello_x_times(x): # function
    for num in range(x): #for loop
        print('Hello') # log statement

print_hello_x_times(4) # function

def print_hello_x_or_ten_times(x = 10): # function
    for num in range(x): # for loop
        print('Hello') # log statement

print_hello_x_or_ten_times() # function
print_hello_x_or_ten_times(4) # function


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)