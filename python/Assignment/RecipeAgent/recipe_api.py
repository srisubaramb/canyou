import json
import requests
import os
def recipe_api(query , search_type):
	base_url = "https://api.spoonacular.com/recipes"
	url = ""
	api_key=os.getenv("SPOONACULAR_API_KEY")
	if search_type == "ingredients":
		url = f"{base_url}/findByIngredients"
		params = {
			"ingredients" : query,
			"number" : 1,
			"apiKey" : api_key
		}
	elif search_type == "title":
		url = f"{base_url}/complexSearch"
		params = {
			"query" : query,
			"number" : 1,
			"apiKey" : api_key
		}
	else:
		return json.dumps({"message" : "Given search type not found"})
	response = requests.get(url, params=params)
	if response.status_code == 200:
		return json.dumps(response.json())
	else:
		return json.dumps({"error" : "Failed to fetch recipe"})
