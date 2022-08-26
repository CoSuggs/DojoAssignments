from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from .model_ninjas import Ninja
# model the class after the table from our database


class Dojo:
    def __init__(self, data):
        # need same number of attributes as columns in your db
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []
    # Now we use class methods to query our database

    def title(self):
        return f"{{ name }}"

    # Create
    @classmethod
    def create(cls, data: dict):
        query = "INSERT INTO dojos (name) VALUES (%(name)s);"
        dojo_id = connectToMySQL(DATABASE).query_db(query, data)
        return dojo_id

    # Read
    @classmethod
    def get_one(cls, data: dict):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if not result:
            return False
        dojo = cls(result[0])
        for i in result:
            x = {
                'id': i["ninjas.id"],
                'first_name': i["first_name"],
                'last_name': i["last_name"],
                'age': i["age"],
                'created_at': i["ninjas.created_at"],
                'updated_at': i["ninjas.updated_at"]
            }
            dojo.ninjas.append(Ninja(x))
        return dojo

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL(DATABASE).query_db(query)
        if not results:
            return []

        all_dojos = []
        for dojo in results:
            all_dojos.append(cls(dojo))
        return all_dojos

    # Update
    @classmethod
    def update_one(cls, data: dict):
        query = "UPDATE dojos SET name = %(name)s WHERE id = %()s;"
        return connectToMySQL(DATABASE).query_db(query, data)
    # Delete
    @classmethod
    def delete_one(cls, data: dict):
        query = "DELETE FROM dojos WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)
    