x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0] = 15
print(x)
students[0]['last_name'] = 'Bryant'
print(students[0]['last_name'])
sports_directory['soccer'][0] = 'Andres'
print(sports_directory['soccer'])
z[0]['y'] = 30
print(z)


students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(students):
    for x in range(len(students)):
        for y in students[x]:
            print(students[x][y])
print(iterateDictionary(students))

def iterateDictionary2(key_name, some_list):
    for x in range(len(students)):
        print(students[x][key_name])

iterateDictionary2('first_name',students)
iterateDictionary2('last_name',students)

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(dojo):
    print(len(dojo))
    for x in range(len(dojo)):
        print(dojo[x])
        
printInfo(dojo['locations'])
printInfo(dojo['instructors'])
