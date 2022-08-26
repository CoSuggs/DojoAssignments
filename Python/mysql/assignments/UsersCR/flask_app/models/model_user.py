from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
# model the class after the table from our database


class User:
    def __init__(self, data):
        # need same number of attributes as columns in your db
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    # Now we use class methods to query our database

    # def title(self):
    #     return f"first_name last_name email"

    # Create
    @classmethod
    def create(cls, data: dict):
        query = "INSERT INTO users (first_name, last_name, email) VALUES (%(first_name)s,%(last_name)s,%(email)s)"
        user_id = connectToMySQL(DATABASE).query_db(query, data)
        return user_id

    # Read
    @classmethod
    def get_one(cls, data: dict):
        query = "SELECT * FROM users WHERE id = %(id)s"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if not result:
            return False

        return cls(result[0])

    @classmethod
    def get_all(cls):
        query = "SELECT * FORM users;"
        results = connectToMySQL(DATABASE).query_db(query)
        if not results:
            return []
        all_users = []
        for id in results:
            all_users.append(cls(id))
        return all_users

    # Update
    @classmethod
    def update_one(cls, data: dict):
        query = "UPDATE users SET first_name = %(first_name)s, last_name= %(last_name)s, email= %(email)s WHERE id = %()s;"
        return connectToMySQL(DATABASE).query_db(query, data)
    # Delete
    @classmethod
    def delete_one(cls, data: dict):
        query = "DELETE FROM users WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query, data)
    