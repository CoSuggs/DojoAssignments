from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'bananas'

# START OF MOVING CODE
@app.route('/')
def counter_page():
    if "value" not in session:
        session["value"] = 1
    session["value"] += 1
    return render_template('index.html', value=session["value"])

@app.route('/click')
def counter_add_two():
    session["value"] +=1
    return redirect('/')


@app.route('/destroy_session')
def destroy_session():
    session.clear()
    return redirect('/')

    # END OF MOVING CODE


if __name__ == "__main__":
    app.run(debug=True)
