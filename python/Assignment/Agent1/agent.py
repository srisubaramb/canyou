import os
import json
from dotenv import load_dotenv
from mistralai.client import Mistral
import tools
#loading evn files
load_dotenv()

api_key = os.getenv("MISTRAL_API_KEY")
client = Mistral(api_key = api_key)

#tools json
TOOLS = {
	"add" : tools.add,
	"sub" : tools.sub,
	"mul" : tools.mul,
	"div" : tools.div
}

SYSTEM_PROMPT = """
You are a calculator AI agent. 
When given a math problem, determine the correct tool to use and the arguments.
You MUST respond ONLY with a valid JSON object in this exact format:
{
    "tool": "add",
    "a": 10,
    "b": 20
}
Available tools: add, subtraction, multiply.
"""

def run_agent(question: str):
    # Send the question and system prompt to Mistral
    response = client.chat.complete(
        model="open-mistral-nemo", 
        response_format={"type": "json_object"}, # Enforces strict JSON output
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": question}
        ]
    )
    
    try:
        # Convert the AI's JSON text response into a Python dictionary
        data = json.loads(response.choices[0].message.content)
        tool_name = data.get("tool")
        a = float(data.get("a", 0))
        b = float(data.get("b", 0))
        
        # Check if the AI picked a valid tool, then run it
        if tool_name in TOOLS:
            result = TOOLS[tool_name](a, b)
            return f"Used tool [{tool_name}] -> Result: {result}"
        else:
            return f"Error: Tool '{tool_name}' not recognized."
            
    except Exception as e:
        return f"Failed to parse AI response or execute tool: {e}"
