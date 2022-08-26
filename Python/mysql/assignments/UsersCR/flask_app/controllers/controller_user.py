from flask import render_template, request, redirect#, session
from flask_app import app
# secret_key = "It's a secrete"

from flask_app.models.model_user import User

@app.route('/user/new')
def users_new():
    return render_template('create_user.html')

@app.route('/user/create', methods=['post'])
def users_create():
    # data = {
    #     **request.form
    #     'created_at': '{user.created_at}'
    # }
    # User.create(data)
    # or just 
    User.create(request.form)
    return redirect('/')


# @app.route('/user/<int:id>')
# def users_show(id):
#     user = User.get_one({'id': id})
#     if not user:
#         return redirect('/')
    
#     return render_template('users_show.html', user=user)

# @app.route('/user/<int:id>/edit')
# def users_edit(id):
#     user = User.get_one({'id': id})
#     if not user:
#         return redirect('/')
#     return render_template('users_edit.html', user=user)

# @app.route('/user/<int:id>/update', methods=['post'])
# def users_update(id):
#     User.update_one(request.form)
#     return redirect(f'/user/{id}')
# # Display route
# @app.route('/user/<int:id>/delete')
# def users_delete(id):
#     user = User.get_one({'id': id})
#     if not user:
#         return redirect('/')
#     return render_template('users_delete.html')
# # Action route
# @app.route('/user/<int:id>/delete/actual')
# def users_delete_actual(id):
#     User.delete_one({'id': id})
#     return redirect('/')

# /user/new
# /user/create
# /user/<int:id> -> show
# /user/<int:id>/edit -> display route edit form
# /user/<int:id>/update -> action route edit form
# /user/<int:id>/delete -> action route