# import the function that will return an instance of a connection
from flask_app.mysqlconnection import connectToMySQL
from flask_app import DATABASE
# model the class after the friend table from our database

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.occupation = data['occupation']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query)
        # Create an empty list to append our instances of friends
        all_users = []
        # Iterate over the db results and create instances of friends with cls.
        for user in results:
            all_users.append( cls(user) )
        return all_users
            

#Class Methods
    # create / save
    # get_all
    # get_one
    # update_one
    # delete_one
