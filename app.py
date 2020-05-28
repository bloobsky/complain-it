import os
from os import path
from flask import Flask
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

if path.exists("env.py"):
  import env 

app = Flask(__name__)

app.config["MONGO_DBNAME"] = 'complain-it'
app.config["MONGO_URI"] = os.getenv("MONGOSRC")

mongo = PyMongo(app)



@app.route('/')
def default():
    return 'Hello World'

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'), port=int(os.environ.get('PORT')), debug=True)
