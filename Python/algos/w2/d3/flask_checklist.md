# flask checklist

## pre-req
`one time install`
```
pip install pipenv
```

##actual checklist
- make an assignments folder
- go into the assignments folder
- open terminal in above folder
- create the virtual enviroment
    ```
    python -m pipenv install flask 
    ```
- `WARNING` look for pipfile and pipfile.lock
    - if you don't see these at this point, you must solve this right away
- go into our virtual env
    ```
    pipenv shell
    ```
- everytime I open up a new terminal have to relaunch pipenv shell
- file structer
  - pipfile
  - pipfile.lock
- server.py file

    ```py
    from flask import Flask, render_template, request, redirect, session
    app = Flask(__name__)"
    secret_key = "insert literally anything here"
        # THIS WILL MOVE!!! -> Controller file
    from model_friend import Friend
    # from file import class
    @app.route("/")
    def index():
        # call the get all classmethod to get all friends
        all_friends = Friend.get_all()
        print(all_friends)
        return render_template("index.html", all_friends = all_friends)

        # END OF MOVING CODE

    if __name__=="__main__":
    app.run(debug=True) 
    ```
- add mysqlconnection file here -> boilerplate (needs no change)

```py
# mysqlconnection.py
# a cursor is the object we use to interact with the database
import pymysql.cursors
# this class will give us an instance of a connection to our database
class MySQLConnection:
    def __init__(self, db):
        # change the user and password as needed
        connection = pymysql.connect(host = 'localhost',
                                    user = 'root', 
                                    password = 'root', 
                                    db = db,
                                    charset = 'utf8mb4',
                                    cursorclass = pymysql
                                    cursors.DictCursor,
                                    autocommit = True)
        # establish the connection to the database
        self.connection = connection
    # the method to query the database
    def query_db(self, query, data=None):
        with self.connection.cursor() as cursor:
            try:
                query = cursor.mogrify(query, data)
                print("Running Query:", query)
     
                cursor.execute(query)
                if query.lower().find("insert") >= 0:
                    # INSERT queries will return the ID NUMBER
                      of the row inserted
                    self.connection.commit()
                    return cursor.lastrowid
                elif query.lower().find("select") >= 0:
                    # SELECT queries will return the data from
                    the database as a LIST OF DICTIONARIES
                    result = cursor.fetchall()
                    return result
                else:
                    # UPDATE and DELETE queries will return
                    nothing
                    self.connection.commit()
            except Exception as e:
                # if the query fails the method will return
                FALSE
                print("Something went wrong", e)
                return False
            finally:
                # close the connection
                self.connection.close() 
# connectToMySQL receives the database we're using and uses it to create an instance of MySQLConnection
def connectToMySQL(db):
    return MySQLConnection(db)

```


- add model file here -> boilerplate (80% change)


```py
# import the function that will return an instance of a connection
from mysqlconnection import connectToMySQL
# model the class after the friend table from our database
class Friend:
    def __init__( self , data ):
        # need same number of attributes as columns in your db
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.occupation = data['occupation']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM friends;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('first_flask').query_db(query)
        # Create an empty list to append our instances of friends
        friends = []
        # Iterate over the db results and create instances of friends with cls.
        for friend in results:
            friends.append( cls(friend) )
        return friends
    # Now we use class methods to query our database
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM friends WHERE id = %(id)s;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('first_flask').query_db(query, data)
        return cls(results[0])
```
