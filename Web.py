import os
from flask import Flask
from flask import render_template
from flask import jsonify
import requests
from bs4 import BeautifulSoup
from data import Commands
import json
import calendar

app = Flask(__name__, static_folder = "templates/static/")
get = Commands()

data = get.getData()


@app.route('/')
def hello():
    return render_template('index.html')


@app.route('/json')
def json():
     return jsonify(data)



if __name__ == "__main__":
    port = int(os.environ.get('PORT', 80))
    app.run(host='0.0.0.0', port=port)
