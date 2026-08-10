import requests
api_key = "42fae3b5c4297151f5c35609a50a5306"
url = "https://api.openweathermap.org/data/2.5/weather"
def weather_api(lat, lon):
	params = {
		"lat": lat,
		"lon": lon,
		"appid": api_key,
		"units": "metric"
	}
	response = requests.get(url=url , params=params)


	if response.status_code == 200:
		data = response.json()
		print("city:", data["name"])
	else:
		print("error:", data) 
		data = {"error": "request failed"}
	return data