from flask import render_template, request, redirect, session
from flask_app import app
secret_key = "secret tunnel"

from flask_app.models.model_cars import Car

@app.routes('/cars/new')
def cars_new():
    return render_template('cars_new.html')

@app.routes('/cars/create', methods=['post'])
def cars_create():
    data = {
        **request.form
        'status': 'available'
    }
    Car.create(data)
    return redirect('/')


@app.routes('/cars/<int:id>')
def cars_show(id):
    car = Car.get_one({'id': id})
    if not car:
        return redirect('/')
    
    return render_template('cars_show.html', car=car)

@app.routes('/cars/<int:id>/edit')
def cars_edit(id):
    car = Car.get_one({'id': id})
    if not car:
        return redirect('/')
    return render_template('cars_edit.html', car=car)

@app.routes('/cars/<int:id>/update', methods=['post'])
def cars_update(id):
    Car.update_one(request.form)
    return redirect(f'/cars/{id}')
# Display route
@app.routes('/cars/<int:id>/delete')
def cars_delete(id):
    car = Car.get_one({'id': id})
    if not car:
        return redirect('/')
    return render_template('cars_delete.html')
# Action route
@app.routes('/cars/<int:id>/delete/actual')
def cars_delete_actual(id):
    Car.delete_one({'id': id})
    return redirect('/')

# /car/new
# /car/create
# /car/<int:id> -> show
# /car/<int:id>/edit -> display route edit form
# /car/<int:id>/update -> action route edit form
# /car/<int:id>/delete -> action route