# 1 Basic
for x in range(151):
    print(x)

# 2 Multiples of 5
for x in range(5, 1001):
    if x % 5 == 0:
        print(x)

# 3 Counting' the Dojo way
for x in range(1, 101):
    if x % 10 == 0:
        print('Coding Dojo')
    elif x % 5 == 0:
        print('Coding')
    else:
        print(x)

# 4 Whoa. That sucker's huge
sum = 0
for x in range(500001):
    if x % 2 != 0:
        sum = sum + x
    if x == 500000:
        print(sum)

# 5 Countdown by Fours
for x in range(2018, 1, -4):
    print(x)
    x -= 1

# 6 Flexible counter
for x in range(8, 57, 8):
    print(x)