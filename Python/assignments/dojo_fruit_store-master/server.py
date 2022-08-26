from flask import Flask, render_template, request, session
app = Flask(__name__)
app.secret_key='pokjhdsfkljsadhfgloijkahgnsldkghj'

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/checkout', methods=['POST'])
def checkout(num1, num2, num3, num4, first_name, last_name):
    session['num1']= request.form['num1'],
    session['num2']= request.form['num2'],
    session['num3']= request.form['num3'],
    session['num4']= request.form['num4'],
    session['first_name']= request.form['first_name'],
    session['last_name']= request.form['last_name'],
    session['student_id']= request.form['student_id']
    sum = int(num1) + int(num2) + int(num3) + int(num4)
    print(request.form)
    return render_template("checkout.html", num1=num1, num2=num2, num3=num3, num4=num4, sum=sum, first_name=first_name, last_name=last_name, student_id=student_id)


session['num1']= request.form['num1'],
session['num2']= request.form['num2'],
session['num3']= request.form['num3'],
session['num4']= request.form['num4'],
session['first_name']= request.form['first_name'],
session['last_name']= request.form['last_name'],
session['student_id']= request.form['student_id']


@app.route('/fruits')
def fruits():
    return render_template("fruits.html")


if __name__ == "__main__":
    app.run(debug=True)
