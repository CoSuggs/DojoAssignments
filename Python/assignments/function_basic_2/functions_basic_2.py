#1
countdown_array = []
def countdown(num):
    for x in range(num, -1, -1):
        countdown_array.append(x)
    return countdown_array
print(countdown(60))

#2
def print_and_return(list):
    print(list[0])
    return list[1]
print(print_and_return([50,56]))

#3
def first_plus_length(list):
    return list[0] + len(list)
print(first_plus_length([10,9,8,7,6,5,4,3,2,1]))

#4
def values_greater_than_second(list):
    if len(list) < 2:
        return False
    arr_greater_than_second_value = []
    for x in range(0,len(list)):
        if list[x] > list[1]:
            arr_greater_than_second_value.append(list[x])
    print(len(arr_greater_than_second_value))
    return arr_greater_than_second_value
print(values_greater_than_second([100,15,10,56,3,14]))
print(values_greater_than_second([12]))

#5
def length_and_value(size,value):
    arr_l_and_v = []
    for i in range(0, size):
        arr_l_and_v.append(value)
    return arr_l_and_v
print(length_and_value(5,56))
print(length_and_value(5,15))
