tools_schema = [
	{
		"type" : "function",
		"function" : {
			"name" : "recipe_api",
			"description" : "Searches for recipes by query and search type.",
			"parameters" : {
				"type" : "object",
				"properties" : {
					"query": {
						"type": "string",
						"description": "The search term, such as ingredients (e.g. 'eggs, tomatoes') or a recipe title."
					},
					"search_type": {
						"type": "string",
						"description": "The search type to use: 'ingredients' to search by available items, or 'title' to search by recipe name.",
						"enum": ["ingredients", "title"]
					}
				} ,
				"required" : ["query", "search_type"]
			}
		}
	}
]