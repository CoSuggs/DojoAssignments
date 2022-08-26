from flask_app import app
from flask import flash, render_template, request, redirect, session
from flask_app.models.model_recipe import Recipe

@app.route('/recipes')
def show_recipes():
    if 'email' not in session:
        return redirect('/')
    list_recipes = Recipe.get_recipes_with_users()
    return render_template('recipes.html', list_recipes=list_recipes)

@app.route('/recipe/new')
def new_recipes():
    if 'email' not in session:
        return redirect('/')
    return render_template('create_recipes.html')

@app.route('/recipe/create', methods = ['POST'])
def create_recipe():
    if Recipe.validate_recipe(request.form) == False:
        return redirect('/recipe/new')
    
    data ={
        **request.form,
        "user_id": session['user_id']
    }
    
    Recipe.create_recipe(data)
    return redirect('/recipes')

@app.route('/recipes/<int:id>')
def show_one(id):
    if 'email' not in session:
        return redirect('/')
    data = {
        "id": id
    }
    current_recipe = Recipe.get_one_with_user(data)
    return render_template('one_recipe.html', current_recipe=current_recipe)

@app.route('/recipes/edit/<int:id>')
def show_edit_recipe(id):
    if 'email' not in session:
        return redirect('/')
    data = {
        "id": id
    }
    current_recipe = Recipe.get_one_with_user(data)
    return render_template('edit_recipe.html', current_recipe=current_recipe)

@app.route('/recipes/process/<int:id>', methods = ['POST'])
def process_recipe(id):
    if Recipe.validate_recipe(request.form) == False:
        return redirect(f'/recipes/edit/{id}')
    recipe_data = {
        **request.form,
        "id": id,
        "user_id": session['user_id']
    }
    Recipe.edit_one(recipe_data)
    return redirect('/recipes')

@app.route('/recipes/delete/<int:id>')
def delete_recipe(id):
    if 'email' not in session:
        return redirect('/')
    data = {
        "id": id
    }
    Recipe.delete_one(data)
    return redirect('/recipes')