from unicodedata import name
from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "two_can_keep_a_secret_if_one_of_them_is_dead"

# display route


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/process', methods=['post'])
def process():
    session['your_name'] = request.form['your_name'],
    session['location'] = request.form['location'],
    session['language'] = request.form['language'],
    session['comments'] = request.form['comments']
    print(request.form)
    return redirect('/result')

@app.route('/result')
def result():
    result_form = {
        'your_name' : session['your_name'],
        'location' : session['location'],
        'language' : session['language'],
        'comments' : session['comments']
    }
    return render_template('result.html', result_form=result_form)


# @app.route('/clear_data')
# def clear_data():
#     del session['your_name']
#     del session['location']
#     del session['language']
#     del session['comments']

#         # END OF MOVING CODE


if __name__ == "__main__":
    app.run(debug=True)
