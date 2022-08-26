from flask import render_template, request, redirect, session
from flask_app import app
secret_key = "secret tunnel"
    # from file import class
from flask_app.models.model_cars import Car

@app.route("/")
def index():
    all_cars = Car.get_all()
    return render_template('index.html', all_cars=all_cars)