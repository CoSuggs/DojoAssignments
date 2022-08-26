from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "two_can_keep_a_secret_if_one_of_them_is_dead"


# START OF MOVING CODE

#Two types of routes
#1. display route
#2. action route (DO NOT RENDER ANY TEMPLATES IN AN ACTION ROUTE)


DATA ={
    'first_name': 'Cody'
}

#display route
@app.route('/')
def hello_world():
    # print(session['data'])
    # print(session['users'])
    # print(session['num_of_users'])
    return render_template('index.html')

#display route
@app.route('/page2')
def hello_world2():
    return render_template('index2.html')

#display route
@app.route('/add_two_vals/<int:num1>/<int:num2>')
def add_two_vals(num1, num2):
    sum = num1 + num2
    print(f"{num1} + {num2} = {sum}")
    return render_template('index3.html', num1=num1, num2=num2, sum=sum)

#2. action route
@app.route('/dojo')
def dojo():
    return 'Dojo'

#2. action route
@app.route('/user/create', methods=['post'])
def user_create():
    session['data']= {
        'first_name' : request.form['first_name'],
        'last_name' : request.form['last_name'],
        'pw' : request.form['pw']
    }
    session['sum_of_users'] = 3
    return redirect('/')


#2. action route
@app.route('/clear_data')
def clear_data():
    del DATA['first_name']


@app.route('/say/<name>')
def say_name(name):
    return "Hi " + str(name)
# @app.route('/clear_data')
# def clear_data():
#     del DATA['first_name']
#     return redirect('/')

#2. action route
@app.route('/repeat/<int:num>/<word>')
def repeat_num(num, word):
    return (f"{word} ") * num

#2. action route
@app.route('/<rndm>')
def rndm(rndm):
    if rndm != dojo() or say_name() or repeat_num():
        return "Sorry! No response. Try again"

@app.route('/<rndm>/<rndm1>')
def rndm1(rndm,rndm1):
    if rndm != dojo() or say_name() or repeat_num():
        return "Sorry! No response. Try again"
    if rndm1 != dojo() or say_name() or repeat_num():
        return "Sorry! No response. Try again"
    
@app.route('/<rndm>/<rndm1>/<rndm2>')
def rndm2(rndm,rndm1,rndm2):
    if rndm != dojo() or say_name() or repeat_num():
        return "Sorry! No response. Try again"
    if rndm1 != dojo() or say_name() or repeat_num():
        return "Sorry! No response. Try again"
    if rndm2 != dojo() or say_name() or repeat_num():
        return "Sorry! No response. Try again"

        # END OF MOVING CODE


if __name__ == "__main__":
    app.run(debug=True)
