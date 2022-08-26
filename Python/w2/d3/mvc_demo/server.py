from flask_app import app
# one more line
from flask_app.controllers import controller_address, controller_car, controller_routes, controller_user


if __name__ == "__main__":
    app.run(debug=True)

