import os
from os import path
from flask import Flask, render_template, url_for, redirect, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

if path.exists("env.py"):
  import env 

app = Flask(__name__)

app.config["MONGO_DBNAME"] = 'complain-it'
app.config["MONGO_URI"] = os.getenv("MONGOSRC")

mongo = PyMongo(app)



@app.route('/')
def index():
    return render_template("index.html")

@app.route('/search_for')
def search_for:
    return render_template('search_for.html')

@app.route('/complain')
def complain:
    return render_template('complain.html')

@app.route('/faq')
def faq:
    return render_template('faq.html')

@app.route('/privacy')
def privacy:
    return render_template('privacy.html')

@app.route('/contact')
def contact:
    return render_template('contact.html')

@app.route('/directions')
def directions:
    return render_template('directions.html')




if __name__ == '__main__':
    app.run(host=os.environ.get('IP'), port=int(os.environ.get('PORT')), debug=True)
