from flask import render_template, request, redirect, session
from flask_app import app
secret_key = "Secrete_key_goes_here"
    # from file import class
from flask_app.models.model_ninjas import Ninja
from flask_app.models.model_dojos import Dojo

@app.route("/ninjas")
def ninjas():
    all_dojos = Dojo.get_all()
    print(all_dojos)
    return render_template('ninja.html', all_dojos=all_dojos)

@app.route("/dojos")
def dojos():
    all_dojos = Dojo.get_all()
    print(all_dojos)
    return render_template('dojo.html', all_dojos=all_dojos)

# @app.route("/dojos/<int:id>")
# def ninja_party():
#     all_ninjas = Ninja.get_all()
#     print(all_ninjas)
#     return render_template('dojo.html', all_ninjas=all_ninjas)

