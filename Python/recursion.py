# Program to print the fibonacci series upto n_terms

# Recursive function
def recursive_fibonacci(n):
    if n <= 1:
        return n
    else:
        return (recursive_fibonacci(n - 1) + recursive_fibonacci(n - 2))
n_terms = 10
    # check if the number of terms is valid
if n_terms <= 0:
    print("Invalid input ! Please input a positive value")
else:
    print("Fibonacci series:")
for i in range(n_terms):
    print(recursive_fibonacci(i))

# Program to print factorial of a number
# recursively.

# Recursive function

def recursive_factorial(n):
    if n == 1:
        return n
    else:
        return n * recursive_factorial(n - 1)


# user input
num = 6

# check if the input is valid or not
if num < 0:
    print("Invalid input ! Please enter a positive number.")
elif num == 0:
    print("Factorial of number 0 is 1")
else:
    print("Factorial of number", num, "=", recursive_factorial(num))

# Program to calculate factorial of a number
# using a Non-Tail-Recursive function.

# non-tail recursive function


def Recur_facto(n):
    if (n == 0):
        return 1
    return n * Recur_facto(n - 1)

# print the result
print(Recur_facto(6))

# Program to calculate factorial of a number
# using a Tail - Recursive function.

# A tail recursive function
def Recur_facto(n, a = 1):
    if (n == 0):
        return a
    return Recur_facto(n - 1, n * a)

# print the result
print(Recur_facto(6))
