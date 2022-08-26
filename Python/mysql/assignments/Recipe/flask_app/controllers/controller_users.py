from flask_app import app
from flask import flash, render_template, request, redirect, session
from flask_app.models.model_user import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

@app.route('/')
def show_login():
    return render_template('index.html')

@app.route('/user/registration', methods = ['POST'])
def process_registration():
    # validate registration form
    if User.validate_registration(request.form) == False:
        return redirect('/')
    #validate if user already exists
    user_exists = User.validate_email(request.form)
    # user_exists = User.validate_email(request.form)
    if user_exists != None:
        flash("Email already in use!", "error_registration_email")
        return redirect('/')
    #proceed to create user
    data = {
        **request.form,
        "password" : bcrypt.generate_password_hash(request.form['password'])
    }
    user_id = User.create_user(data)
    
    session['first_name'] = data['first_name']
    session['email'] = data['email']
    session['user_id'] = user_id
    
    return redirect('/recipes') #This needs to change to another display route

@app.route('/user/login', methods=['POST'])
def process_login():
    current_user = User.validate_email(request.form)
    if current_user != None:
        if not bcrypt.check_password_hash(current_user.password, request.form['password']):
            flash("Wrong credentials", "error_login_password")
            return redirect('/')
    
        session['first_name'] = current_user.first_name
        session['email'] = current_user.email
        session['user_id'] = current_user.id
    
        return redirect('/recipes')
    else:
        flash("Wrong credentials", "error_login_password")
        return redirect('/')

@app.route('/user/logout')
def process_logout():
    session.clear()
    return redirect('/')