import pycurl
from io import BytesIO
import tempfile

def request(url, header, post_data=None):
	contentBuffer = BytesIO()

	c = pycurl.Curl()
	c.setopt(c.URL, url)

	# Set the HTTP headers
	c.setopt(c.HTTPHEADER, header)
	c.setopt(c.WRITEDATA, contentBuffer)
	c.perform()

	# Get the response content
	response_content = contentBuffer.getvalue().decode('utf-8')

	c.close()

	return response_content

common_headers = {
	'__fetch_req__': 'true',
	'accept': '*/*',
	'accept-language': 'en-US,en;q=0.9',
	'content-type': 'application/json',
	'cookie': '__SW=eVTy-bKm_XHZfno1q6oqzYxMWAoIa7iC; _guest_tid=fea1d3e9-8f26-4282-9449-add6dfb127ae; _device_id=fe728733-d0ec-3eee-07b9-cdd3cd0c8513; _sid=fba4047b-22e0-4246-a4dc-31aedcb5ef93; userLocation={"lat":"21.18880","lng":"72.82930","address":"","area":"","showUserDefaultAddressHint":false}; fontsLoaded=1',
	'priority': 'u=1, i',
	'referer': 'https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2',
	'sec-ch-ua': '"Not A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"',
	'sec-ch-ua-mobile': '?0',
	'sec-ch-ua-platform': '"Windows"',
	'sec-fetch-dest': 'empty',
	'sec-fetch-mode': 'cors',
	'sec-fetch-site': 'same-origin',
	'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0'
}

common_headers = [f""



# Create a buffer to capture the response
contentBuffer = BytesIO()

c = pycurl.Curl()
c.setopt(c.URL, 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.18880&lng=72.82930&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null')

# Set the HTTP headers
c.setopt(c.HTTPHEADER, [
	'__fetch_req__: true',
	'accept: */*',
	'accept-language: en-US,en;q=0.9',
	'content-type: application/json',
	'cookie: __SW=eVTy-bKm_XHZfno1q6oqzYxMWAoIa7iC; _guest_tid=fea1d3e9-8f26-4282-9449-add6dfb127ae; _device_id=fe728733-d0ec-3eee-07b9-cdd3cd0c8513; _sid=fba4047b-22e0-4246-a4dc-31aedcb5ef93; userLocation={"lat":"21.18880","lng":"72.82930","address":"","area":"","showUserDefaultAddressHint":false}; fontsLoaded=1',
	'priority: u=1, i',
	'referer: https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2',
	'sec-ch-ua: "Not A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"',
	'sec-ch-ua-mobile: ?0',
	'sec-ch-ua-platform: "Windows"',
	'sec-fetch-dest: empty',
	'sec-fetch-mode: cors',
	'sec-fetch-site: same-origin',
	'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0'
])
c.setopt(c.WRITEDATA, contentBuffer)
c.perform()

print("Response Status:", c.getinfo(c.RESPONSE_CODE))

# Get the response content
response_content = contentBuffer.getvalue().decode('utf-8')

with open('response.json', 'w', encoding='utf-8') as f:
	f.write(response_content)


c.close()


# Create a buffer to hold the response
buffer = BytesIO()

# Initialize the cURL object
c = pycurl.Curl()
c.setopt(c.URL, "https://www.swiggy.com/dapi/restaurants/list/update")
c.setopt(c.WRITEFUNCTION, buffer.write)
c.setopt(c.POSTFIELDS, '{"lat":"21.18880","lng":"72.82930","collection":"83631","tags":"layout_CCS_Pizza","sortBy":"","filters":"","type":"rcv2","nextOffset":"CMVlEO8kKIDgp8Gw5N7MPjDFDjgE","widgetOffset":{"restaurantCountWidget":"","inlineFacetFilter":"","collectionV5RestaurantListWidget_SimRestoRelevance_food":"8","collectionV5MastheadWidget":""},"page_type":null,"_csrf":"x9mUOTdTzZF9-BEZouf7DJI8YoK6j3SR0NYtdAkw"}')
c.setopt(c.HTTPHEADER, [
    "__fetch_req__: true",
    "accept: */*",
    "accept-language: en-US,en;q=0.9",
    "content-type: application/json",
    "cookie: __SW=eVTy-bKm_XHZfno1q6oqzYxMWAoIa7iC; _guest_tid=fea1d3e9-8f26-4282-9449-add6dfb127ae; _device_id=fe728733-d0ec-3eee-07b9-cdd3cd0c8513; _sid=fba4047b-22e0-4246-a4dc-31aedcb5ef93; userLocation={\"lat\":\"21.18880\",\"lng\":\"72.82930\",\"address\":\"\",\"area\":\"\",\"showUserDefaultAddressHint\":false}; fontsLoaded=1",
    "origin: https://www.swiggy.com",
    "priority: u=1, i",
    "referer: https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
    "sec-ch-ua: \"Not A;Brand\";v=\"99\", \"Microsoft Edge\";v=\"127\", \"Chromium\";v=\"127\"",
    "sec-ch-ua-mobile: ?0",
    "sec-ch-ua-platform: \"Windows\"",
    "sec-fetch-dest: empty",
    "sec-fetch-mode: cors",
    "sec-fetch-site: same-origin",
    "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0"
])
c.setopt(c.CUSTOMREQUEST, "POST")

# Perform the request
c.perform()