# flask checklist

## pre-req
`one time install`
```
pip install pipenv
```

##actual checklist
- make an assignments folder
- go into the assignments folder
- open terminal in above folder
- create the virtual enviroment
    ```
    python -m pipenv install flask 
    ```
- `WARNING` look for pipfile and pipfile.lock
    - if you don't see these at this point, you must solve this right away
- go into our virtual env
    ```
    pipenv shell
    ```
- everytime I open up a new terminal have to relaunch pipenv shell
- file structer
  - pipfile
  - pipfile.lock
- server.py file

    ```py
    from flask import Flask, reder_template, request, redirect, session
    app = Flask(__name__)"
    secret_key = "insert literally anything here"
        # THIS WILL MOVE!!!

    @app.route('/') #is a method attached to this flask
    def hello_world():
        return 'Hello World!'

        # END OF MOVING CODE

    if __name__=="__main__":
    app.run(debug=True) 
    ```
