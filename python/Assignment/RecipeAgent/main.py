import json
import os
from rich.markdown import Markdown
from rich.console import Console
from recipe_api import recipe_api
from tools import tools_schema
from mistralai.client import Mistral
from dotenv import load_dotenv

load_dotenv()

console = Console()

api_key=os.getenv("MISTRAL_API_KEY")
client = Mistral(api_key=api_key)


user_prompt = ""
system_prompt="You are a recipe assistant. Always recommend only ONE single recipe to the user at a time."
while True:
	user_prompt = input("You: ")
	if user_prompt != "exit":
		try:
			result = client.chat.complete(
				model="mistral-large-latest",
				messages=[
					{"role": "system" , "content" : system_prompt},
					{ "role" : "user","content" : user_prompt}
				],
				tools=tools_schema
			)
			tool_calls = result.choices[0].message.tool_calls
			if tool_calls:
				tool_call = tool_calls[0]
				function_to_call = tool_call.function.name
				function_args = json.loads(tool_call.function.arguments)
				if function_to_call == "recipe_api":
					tool_result = recipe_api(function_args["query"], function_args["search_type"])
					messages = [
						{"role": "system","content": system_prompt},
						{"role": "user", "content": user_prompt},
						result.choices[0].message,  
						{
							"role": "tool",
							"name": function_to_call,
							"content": tool_result,
							"tool_call_id": tool_call.id
						}
					]
					final_call = client.chat.complete(
						model="mistral-large-latest",
						messages=messages
					)
					
					MarkDownOutput = Markdown(final_call.choices[0].message.content)
					print("AI: ")
					console.print(MarkDownOutput)
			else:
				MarkDownOutput = Markdown(result.choices[0].message.content)
				print("AI: ")
				console.print(MarkDownOutput)
		except Exception as e :
			print(e)
	else:
		print("Your chat completed, Bon appetie!")
		break