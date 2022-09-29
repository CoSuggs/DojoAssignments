# Python VS JavaScript

```js
function addNums(num1, num2){
    gArr = ['tomatos','potatos', 'Bread']
    for(let i=0; i<gArr.length; i++){
        let item = gArr[i];
        console.log(item)
    }
}
console.log(addNums(5 , 7))
```
`A function is what it returns`

```py
def add_nums(num1 , num2):
    g_list = ['tomatos', 'potatos', 'bread']
    for idx ,item in enumerate(g_list):
        print(idx)
        print(item)
```

## Wat are the differences?
- naming convention
  - py:
    - variables & functions: snake_case
    - class: PascalCase
  - js: camelCase
- print VS console.log
-Code Block
  - : VS {}
  - indentation
- Def VS Function


# Data Types
|  js     |indicator         |  py         |indicator     |
|---------|------------------|-------------|--------------|
|number   |5                 |  int        |5             |
|number   |5                 | Float       |5             |
| bool    |true / false      | bool        |True or False |
|strings  |' ' or " " or ` ` |Strings      |" " or ' '    |
|arrays   |[ ]               |arrays       |[ ]           |
|object   |{ }               |dict         |{ }           |
|         |                  |tuples       |( )           |
|undefined|                  |NoneType     |              |
|comments | //               | comments    | #            |
|         |                  |docstring    |  """ """     |

```py
print('My name is Cody, I am at cody\'s house')
```