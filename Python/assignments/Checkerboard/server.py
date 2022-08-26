from flask import Flask, render_template  # added render_template!
app = Flask(__name__)


# START OF MOVING CODE

@app.route('/')
def render__eight_by_eight():
    x = 8
    y = 8
    return render_template('index.html', x=x, y=y)


@app.route('/<int:x>')
def one_axis(x):
    return render_template('index.html', x=x, y=8)


@app.route('/<int:x>/<int:y>')
def two_axis(x, y):
    return render_template('index.html', x=x, y=y)


@app.route('/<int:x>/<int:y>/<color1>/')
def first_color(x, y, color1):
    return render_template('index.html', x=x, y=y, color1=color1)


@app.route('/<int:x>/<int:y>/<color1>/<color2>')
def both_colors(x, y, color1, color2):
    return render_template('index.html', x=x, y=y, color1=color1, color2=color2)

    # END OF MOVING CODE


if __name__ == "__main__":
    app.run(debug=True)
