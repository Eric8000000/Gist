from flask import Flask
from markupsafe import escape
# import requests
# from bs4 import BeautifulSoup
# # part of python
# import csv
# import time

from searcher import searchSafeway

app = Flask(__name__)

@app.route('/safeway/<query>')
def safeway(query):
        url = "https://www.safeway.com/shop/search-results.html?q=" + escape(query)
        results = searchSafeway(url)
        return escape(results)

@app.route('/target/<query>')
def target(query):
        url = "https://www.target.com/s?searchTerm=" + escape(query)
        results = search(url)
        return escape(results)

@app.route('/qfc/<query>')
def qfc(query):
        url = "https://www.qfc.com/search?query=" + escape(query) + "&searchType=default_search"
        results = search(url)
        return escape(results)

@app.route('/traderjoes/<query>')
def traderjoes(query):
        url = "https://www.traderjoes.com/home/search?q=" + escape(query) + "&global=yes"
        results = search(url)
        return escape(results)
