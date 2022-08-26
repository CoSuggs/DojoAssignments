from flask import Flask, render_template  # added render_template!
app = Flask(__name__)


# START OF MOVING CODE

@app.route('/')
def render_index():
    users = [
        {'first_name': 'Michael', 'last_name': 'Choi'},
        {'first_name': 'John', 'last_name': 'Supsupin'},
        {'first_name': 'Mark', 'last_name': 'Guillen'},
        {'first_name': 'KB', 'last_name': 'Tonel'}
    ]
    return render_template('index.html', users=users)


# END OF MOVING CODE

if __name__ == "__main__":
    app.run(debug=True)
