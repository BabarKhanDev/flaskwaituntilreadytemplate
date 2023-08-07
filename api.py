from flask import Flask, jsonify, render_template

app = Flask(__name__)

users = []

@app.route("/addUser/<name>")
def add_user(name):
    users.append(name)
    return jsonify(f"added {name}")

@app.route("/users>")
def get_users():
    return jsonify(users)

@app.route("/getReadyStatus")
def ready_status():
    if len(users) >= 2:
        return jsonify("ready")
    else:
        return jsonify("not ready")

@app.route("/")
def homepage():
    message = "Hello World!"
    return render_template('index.html', message = message)

