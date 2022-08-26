from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
# model the class after the friend table from our database


class Car:
    def __init__(self, data):
        # need same number of attributes as columns in your db
        self.id = data['id']
        self.make = data['make']
        self.model = data['model']
        self.year = data['year']
        self.status = data['status']
        self.customer_id = data['customer_id']
        self.price = data['price']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    # Now we use class methods to query our database

    def title(self):
        return f"{self.year} {self.make} {self.model} "

    # Create
    @classmethod
    def create(cls, data: dict):
        query = "INSERT INTO cars (make, model, year, price, status) VALUES (%(make)s,%(model)s,%(year)s,%(price)s,%(status)s,)"
        car_id = connectToMySQL(DATABASE).query_db(query, data)
        return car_id

    # Read
    @classmethod
    def get_one(cls, data: dict):
        query = "SELECT * FROM cars WHERE id = %(id)s"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if not result:
            return False

        return cls(result[0])

    @classmethod
    def get_all(cls):
        query = "SELECT * FORM cars;"
        results = connectToMySQL(DATABASE).query_db(query)
        if not results:
            return []

        all_cars = []
        for car in results:
            all_cars.append(cls(car))
        return all_cars

    # Update
    @classmethod
    def update_one(cls, data: dict):
        query = "UPDATE cars SET make = %(make)s, model = %(model)s, year = %(year)s, price = %(price)s, status = %(status)s WHERE id = %()s;"
        return connectToMySQL(DATABASE).query_db(query, data)
    # Delete
    @classmethod
    def delete_one(cls, data: dict):
        query = "DELETE FROM cars WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query, data)
    