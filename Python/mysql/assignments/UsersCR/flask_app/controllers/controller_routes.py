from flask import render_template, request, redirect#, session
from flask_app import app
# secret_key = "It's a secrete"
    # from file import class
from flask_app.models.model_user import User

@app.route("/")
def index():
    all_users = User.get_all()
    return render_template('index.html', all_users=all_users)