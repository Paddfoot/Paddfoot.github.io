import requests
from bs4 import BeautifulSoup
import json

# URL of the character page
url = "https://wiki.hoyolab.com/pc/genshin/entry/6319"

# Send a request to fetch the page content
response = requests.get(url)
if response.status_code == 200:
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Assuming the relevant data is within a specific element, let's extract it
    # You might need to inspect the webpage to adjust the selectors accordingly
    character_name = soup.find('h1').text.strip()
    
    # Example of scraping more specific character details (adjust according to HTML structure)
    character_info = {}
    for detail in soup.find_all('div', class_='character-details'):
        key = detail.find('span', class_='label').text.strip()
        value = detail.find('span', class_='value').text.strip()
        character_info[key] = value
    
    # Print or convert the scraped data into JSON format
    character_data = {
        'name': character_name,
        'details': character_info
    }
    
    # Output JSON
    print(json.dumps(character_data, indent=4))
else:
    print(f"Failed to retrieve data: {response.status_code}")
