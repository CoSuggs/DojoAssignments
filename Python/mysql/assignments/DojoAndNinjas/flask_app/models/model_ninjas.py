from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
# model the class after the table from our database


class Ninja:
    def __init__(self, data):
        # need same number of attributes as columns in your db
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        # self.dojo_id = data['dojo_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    # Now we use class methods to query our database

    def title(self):
        return f"first_name last_name age"

    # Create
    @classmethod
    def create(cls, data: dict):
        query = "INSERT INTO ninjas(first_name, last_name, age, dojo_id) VALUES (%(first_name)s,%(last_name)s,%(age)s,%(dojo_id)s);"
        ninja_id = connectToMySQL(DATABASE).query_db(query, data)
        return ninja_id

    # Read
    @classmethod
    def get_one(cls, data: dict):
        query = "SELECT * FROM ninjas WHERE id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if not result:
            return False

        return cls(result[0])

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas WHERE dojo_id = %(dojo_id)s;"
        results = connectToMySQL(DATABASE).query_db(query)
        if not results:
            return []

        all_ninjas = []
        for ninja in results:
            all_ninjas.append(cls(ninja))
        return all_ninjas

    # Update
    @classmethod
    def update_one(cls, data: dict):
        query = "UPDATE ninjas SET first_name = %(first_name)s, last_name= %(last_name)s, age= %(age)s, dojo_id = %(dojo_id)s WHERE id = %()s;"
        return connectToMySQL(DATABASE).query_db(query, data)
    # Delete
    @classmethod
    def delete_one(cls, data: dict):
        query = "DELETE FROM ninjas WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)
    