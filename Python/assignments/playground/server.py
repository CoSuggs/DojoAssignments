from flask import Flask, render_template  # added render_template!
app = Flask(__name__)


# START OF MOVING CODE

@app.route('/')
def render_index():
    return "To play, please type '/play' without quotations at end of url"

@app.route('/play')
def render_play():
    num=3
    return render_template('play.html', num=num)

@app.route('/play/<int:num>')
def play_boxes(num):
    return render_template('play.html', num=num)


@app.route('/play/<int:num>/<color>')
def play_colors(num, color):
    return render_template('play.html', num=num, color=color)


        # END OF MOVING CODE


if __name__ == "__main__":
    app.run(debug=True)
