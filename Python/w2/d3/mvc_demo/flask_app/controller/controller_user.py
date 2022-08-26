from flask_app import app
from flask import render_template, request, redirect

from flask_app.models.model_user import User

@app.route("/")
def index():
    # call the get all classmethod to get all friends
    all_users = User.get_all()
    print(all_users)
    return render_template("index.html" all_users = all_users)


# RESTful 
# table_name/id (if possible)/action
#
# 2 types of routes -> Display Route and Action Route
# car/new ->Display Route: Render the page that displays the form for a new car
# car/create -> Action Route: process the info from the car/new route and add it to the database
# car/<int:id> -> Display Route: show all the info of the table
# car/<int:id>/edit -> Display Route: display the form in which you want to make changes on
# car/<int:id>/process -> Action Route: process the info from the edit route
# car/<int:id>/delete -> Action Route: delete record at id from your database