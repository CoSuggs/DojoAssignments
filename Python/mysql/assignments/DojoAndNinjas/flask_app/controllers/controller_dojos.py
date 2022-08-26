from flask import render_template, request, redirect, session
from flask_app import app
secret_key = "Secrete_key_goes_here"

from flask_app.models.model_dojos import Dojo

@app.route('/dojos/new')
def dojos_new():
    return render_template('dojos_new.html')

@app.route('/dojos/create', methods=['post'])
def dojos_create():
    # data = {
    #     **request.form
    # }
    # Dojo.create(data)
    #or just 
    Dojo.create(request.form)
    return redirect('/dojos')

# @app.route('/dojos/process')
# def dojo_create():
#     return render_template('dojos.html')

@app.route('/dojos/<int:id>')
def dojos_show(id):
    dojo = Dojo.get_one({'id': id})
    if not dojo:
        return redirect('/dojos')
    print(dojo)
    return render_template('show_dojos.html', dojo=dojo)

@app.route('/dojos/<int:id>/edit')
def dojos_edit(id):
    dojo = Dojo.get_one({'id': id})
    if not dojo:
        return redirect('/')
    return render_template('dojos_edit.html', dojo=dojo)

@app.route('/dojos/<int:id>/update', methods=['post'])
def dojos_update(id):
    Dojo.update_one(request.form)
    return redirect(f'/dojo/{id}')
# Display route
@app.route('/dojos/<int:id>/delete')
def dojos_delete(id):
    dojo = Dojo.get_one({'id': id})
    if not dojo:
        return redirect('/')
    return render_template('dojos_delete.html')
# Action route
@app.route('/dojos/<int:id>/delete/actual')
def dojos_delete_actual(id):
    Dojo.delete_one({'id': id})
    return redirect('/')

# /dojo/new
# /dojo/create
# /dojo/<int:id> -> show
# /dojo/<int:id>/edit -> display route edit form
# /dojo/<int:id>/update -> action route edit form
# /dojo/<int:id>/delete -> action route