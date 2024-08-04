import pycurl
from io import BytesIO
from bs4 import BeautifulSoup
from rich import print
from pathlib import Path
import re
# import tempfile
import orjson

'pip install pycurl orjson'

def request(url, header, post_data=None):
	contentBuffer = BytesIO()

	c = pycurl.Curl()
	c.setopt(c.URL, url)

	# Set the HTTP headers
	c.setopt(c.HTTPHEADER, header)
	c.setopt(c.WRITEDATA, contentBuffer)
	if post_data:
		c.setopt(c.POSTFIELDS, post_data)
		c.setopt(c.CUSTOMREQUEST, "POST")
	c.perform()

	# Get the response content
	response_content = contentBuffer.getvalue().decode('utf-8')
	status_code = c.getinfo(c.RESPONSE_CODE)

	c.close()

	return status_code, response_content

def save_data(data, filename):
	Path(filename).parent.mkdir(parents=True, exist_ok=True)
	with open(filename, 'w', encoding='utf-8') as f:
		f.write(orjson.dumps(data, option=orjson.OPT_INDENT_2).decode('utf-8'))

def extract_preloaded(response_content):
	extraction = re.search(r'window\.__PRELOADED_STATE__ = JSON.parse\("(.*)"\)', response_content)
	if not extraction: return None
	return orjson.loads(extraction.group(1).encode().decode('unicode_escape'))

common_headers = {
	'__fetch_req__': 'true',
	'accept': '*/*',
	'accept-language': 'en-US,en;q=0.9',
	'content-type': 'application/json',
	'priority': 'u=1, i',
	'sec-ch-ua': '"Not A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"',
	'sec-ch-ua-mobile': '?0',
	'sec-ch-ua-platform': '"Windows"',
	'sec-fetch-dest': 'empty',
	'sec-fetch-mode': 'cors',
	'sec-fetch-site': 'same-origin',
	'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0'
}
common_headers = [f"{key}: {value}" for key, value in common_headers.items()]

def download_city_data():

	_, response_content = request('https://www.zomato.com/', common_headers)
	parsed = extract_preloaded(response_content)
	save_data(parsed, 'raw/home.json')

	countries = [country['value'] for country in parsed['footer']['linksData']['countries']]
	print(f"Available countries: {len(countries)}")

	for country in countries:
		statusCode, response_content = request(f'https://www.zomato.com/{country}', common_headers)
		if statusCode != 200:
			print(f"No data for {country}")
			continue
		parsed = extract_preloaded(response_content)
		if not parsed:
			print(f'Encountered an error while extracting data for {country}')
			continue
		save_data(parsed, f'raw/{country}.json')

		regions = [region for region in parsed['pages']['country']['states']['']]
		print(f"Regions in {country}: {len(regions)}")

		for region in regions:
			print(f" ⇢ Downloading {region['name']}")
			statusCode, response_content = request(region['url'], common_headers)
			if statusCode != 200:
				print(f"No data for {region['name']}")
				continue
			parsed = extract_preloaded(response_content)
			if not parsed:
				print(f'Encountered an error while extracting data for {region['name']}')
				continue
			save_data(parsed, f'raw/{country}/{region['name']}.json')

def extractRestraunts():
	# country, city = input('Enter country and city: ').split()
	country, cityName = 'india', 'surat'
	"""
	payload = {
		"context":"dineout",
		"filters":{"searchMetadata":{"previousSearchParams":"{\\"PreviousSearchId\\":\\"db66b20b-12a2-4032-8b6c-0926cbe14444\\",\\"PreviousSearchFilter\\":[\\"{\\\\\\"category_context\\\\\\":\\\\\\"go_out_home\\\\\\"}\\",\\"\\",\\"{\\\\\\"context\\\\\\":\\\\\\"dineout_home\\\\\\"}\\"]}","postbackParams":"{\\"total_restaurants_shown\\":9,\\"total_results_shown\\":9,\\"page\\":1,\\"solr_offset\\":9,\\"vg_set\\":true,\\"search_id\\":\\"db66b20b-12a2-4032-8b6c-0926cbe14444\\"}","totalResults":3318,"hasMore":true,"getInactive":false},"dineoutAdsMetaData":{},"appliedFilter":[{"filterType":"category_sheet","filterValue":"go_out_home","isHidden":true,"isApplied":true,"postKey":"{\\"category_context\\":\\"go_out_home\\"}"},{"filterType":"context","filterValue":"dineout_home","isHidden":true,"isApplied":true,"postKey":"{\\"context\\":\\"dineout_home\\"}"}],"urlParamsForAds":{}},
		"addressId":0,
		"entityId":85811,
		"entityType":"subzone",
		"locationType":"",
		"isOrderLocation":1,
		"cityId":38,
		"latitude":"21.1443560000",
		"longitude":"72.7714680000",
		"userDefinedLatitude":21.144356,
		"userDefinedLongitude":72.771468,
		"entityName":"Vesu, Surat",
		"orderLocationName":"Vesu, Surat",
		"cityName":"Surat",
		"countryId":1,
		"countryName":"India",
		"displayTitle":"Vesu, Surat",
		"o2Serviceable":True,
		"placeId":"ChIJmwQr-XZS4DsR7pdY7TQn-1g",
		"cellId":"4314539115149262848",
		"deliverySubzoneId":12369,
		"placeType":"GOOGLE_PLACE",
		"placeName":"Vesu, Surat",
		"isO2City":True,
		"fetchFromGoogle":False,
		"fetchedFromCookie":True,
		"isO2OnlyCity":False,
		"address_template":[],
		"otherRestaurantsUrl":""}
	"""

	city = orjson.loads(Path(f'raw/{country}/{cityName}.json').read_text(encoding='utf-8'))
	search = city['pages']['current']['ogPageUrl']
	restraunts = city['pages']['search'][search]['sections']['SECTION_SEARCH_RESULT']
	print(f"Total restraunts: {len(restraunts)}")

	for restraunt in restraunts:
		if restraunt['type'] != 'restaurant': continue
		print(f" ⇢ Downloading {restraunt['info']['name']}")
		href = restraunt['cardAction']['clickUrl'].split('/')
		url = f"https://www.zomato.com/webroutes/getPage?page_url=/{href[1]}/{href[2]}/order&location=&isMobile=0"
		_, response_content = request(url, common_headers)
		data = orjson.loads(response_content)
		save_data(data, f'raw/{country}/{cityName}/{href[2]}.json')

		if 'order' not in data['page_data']:
			print(f"Error: {restraunt['info']['name']} does not have a menu")
			continue

		processed = {
			'basicInfo': {
				'name': data['page_data']['sections']['SECTION_BASIC_INFO']['name'],
				'cuisine_string': data['page_data']['sections']['SECTION_BASIC_INFO']['cuisine_string'],
				'canonicalUrl': data['page_info']['canonicalUrl'],
			},
			'ratings': data['page_data']['sections']['SECTION_BASIC_INFO']['rating_new']['ratings'],
			'establishment': data['page_data']['sections']['SECTION_RES_CONTACT'],
			'items': []
		}

		for menu in data['page_data']['order']['menuList']['menus']:
			menu = menu['menu']
			for category in menu['categories']:
				category = category['category']
				for item in category['items']:
					item = item['item']
					processed['items'].append({
						'name': item['name'],
						'description': item['desc'],
						'media': item.get('item_image_url'),
						'price': item['price'],
						'menuName': menu['name'],
						'categoryName': category['name'],
						'slugs': item['tag_slugs'] + item['service_slugs'] + item['dietary_slugs'] + item['inapplicable_filter_tag_slugs'] +
							item['secondary_tag_slugs'] + item['disclaimer_tag_slugs'] + [item['primary_tag_slug']]						
					})
		
		save_data(processed, f'processed/{cityName}/{href[2]}.json')

def downloadRestraunt(clickURL):
	...


def getRestraunts():
	country, cityName = 'india', 'surat'
	city = orjson.loads(Path(f'raw/{country}/{cityName}.json').read_text(encoding='utf-8'))
	search = city['pages']['current']['pageUrl']
	restraunts = city['pages']['search'][search]['sections']['SECTION_SEARCH_RESULT']

	for restraunt in restraunts:
		if restraunt['type'] != 'restaurant': continue
		print(f" ⇢ Downloading {restraunt['info']['name']}")
		downloadRestraunt(restraunt['cardAction']['clickUrl'])

	# Just to freshen things up
	url = f"https://www.zomato.com{search}"
	_, response_content = request(url, common_headers)
	data = extract_preloaded(response_content)

	searchMetaData = data['pages']['search'][search]['sections']['SECTION_SEARCH_META_INFO']['searchMetaData']
	del searchMetaData['filterInfo']

	filters = {
		'appliedFilter': [
			{"filterType": 'category_sheet', "filterValue": 'go_out_home', "isHidden": True, "isApplied": True, "postKey": '{"category_context":"go_out_home"}'},
			{"filterType": 'context', "filterValue": 'dineout_home', "isHidden": True, "isApplied": True, "postKey": '{"context":"dineout_home"}'}
		],
		'dineoutAdsMetaData': {},
		'searchMetadata': orjson.dumps(searchMetaData).decode('utf-8'),
		'urlParamsForAds': {}
	}

	sections = data['pages']['search'][search]['sections']
	location = data['location']['currentLocation']

	place = sections['SECTION_POPULAR_LOCATIONS']['locations'][0]['name'] + ', ' + location['cityName']
	payload = {
		"context":"dineout",
		"filters": orjson.loads(orjson.dumps(filters)),
		"addressId":0,
		"entityId":sections['SECTION_POPULAR_LOCATIONS']['locations'][0]['subzone_id'],
		"entityType":"subzone",
		"locationType":"",
		"isOrderLocation":1,
		"cityId":location['cityId'],
		"latitude":location['latitude'],
		"longitude": location['longitude'],
		"userDefinedLatitude":21.144356,
		"userDefinedLongitude":72.771468,
		"entityName": place,
		"orderLocationName": place,
		"cityName":location['cityName'],
		"countryId":1,
		"countryName":"India",
		"displayTitle":place,
		"o2Serviceable":True,
		"placeId":"ChIJmwQr-XZS4DsR7pdY7TQn-1g",
		"cellId": location['cellId'],
		"deliverySubzoneId":location['deliverySubzoneId'],
		"placeType":"GOOGLE_PLACE",
		"placeName":place,
		"isO2City":True,
		"fetchFromGoogle":False,
		"fetchedFromCookie":True,
		"isO2OnlyCity":False,
		"address_template":[],
		"otherRestaurantsUrl":""
	}

	_, response_content = request("https://www.zomato.com/webroutes/search/home", common_headers, orjson.dumps(payload))
	print(response_content[:100])




	
getRestraunts()

# extractRestraunts()