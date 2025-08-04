import requests
from bs4 import BeautifulSoup
import json

def scrape():
    url = 'https://www.bbc.com/news'
    headers = {'User-Agent': 'Mozilla/5.0'}
    response = requests.get(url, headers=headers)

    soup = BeautifulSoup(response.content, 'html.parser')
    headlines = [h.text.strip() for h in soup.select('h2')[:5]]

    return json.dumps({"headlines": headlines})

if __name__ == "__main__":
    print(scrape())
