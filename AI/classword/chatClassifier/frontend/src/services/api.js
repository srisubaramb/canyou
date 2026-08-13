const url = "http://localhost:5000/api"

export async function classify(text) {
	const classifyURL = url + "/classify"
	const result = await fetch(classifyURL , {
		method : "POST",
		headers : {
			"content-type" : "application/json"
		},
		body : JSON.stringify({
			userPrompt : text
		})
	})
	return await result.json();
}
export async function summarize(text) {
	const summarizeURL = url + "/summarize"
	const result = await fetch(summarizeURL , {
		method : "POST",
		headers : {
			"content-type" : "application/json"
		},
		body : JSON.stringify({
			userPrompt : text
		})
	})
	return await result.json();
}