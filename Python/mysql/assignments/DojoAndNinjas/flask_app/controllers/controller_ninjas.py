from flask import render_template, request, redirect, session
from flask_app import app
secret_key = "Secrete_key_goes_here"

from flask_app.models.model_ninjas import Ninja

@app.route('/ninjas/new')
def ninjas_new():
    return render_template('ninjas_new.html')

@app.route('/ninjas/create', methods=['post'])
def ninjas_create():
    data = {
        **request.form
    }
    Ninja.create(data)
    print(data)
    #or just Ninja.create(request.form)
    return redirect(f'/dojos/{request.form["dojo_id"]}')


@app.route('/ninja/<int:id>')
def ninjas_show(id):
    ninja = Ninja.get_one({'id': id})
    if not ninja:
        return redirect('/')
    
    return render_template('show_dojos.html', ninja=ninja)

@app.route('/ninja/<int:id>/edit')
def ninjas_edit(id):
    ninja = Ninja.get_one({'id': id})
    if not ninja:
        return redirect('/')
    return render_template('ninjas_edit.html', ninja=ninja)

@app.route('/ninja/<int:id>/update', methods=['post'])
def ninjas_update(id):
    Ninja.update_one(request.form)
    return redirect(f'/ninja/{id}')
# Display route
@app.route('/ninja/<int:id>/delete')
def ninjas_delete(id):
    ninja = Ninja.get_one({'id': id})
    if not ninja:
        return redirect('/')
    return render_template('ninjas_delete.html')
# Action route
@app.route('/ninja/<int:id>/delete/actual')
def ninjas_delete_actual(id):
    Ninja.delete_one({'id': id})
    return redirect('/')

# /ninja/new
# /ninja/create
# /ninja/<int:id> -> show
# /ninja/<int:id>/edit -> display route edit form
# /ninja/<int:id>/update -> action route edit form
# /ninja/<int:id>/delete -> action route