from flask import Flask, render_template, request
import mysql.connector

app = Flask(__name__)
@app.route('/')
def db():
    mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="mydatabase")
def index():
    return render_template('index.html')
  
  