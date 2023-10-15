import requests

query = "granola"
print(requests.get('http://127.0.0.1:5000/safeway/' + query).content)
