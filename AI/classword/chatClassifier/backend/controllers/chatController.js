import { aiServiceClassify, aiServiceSummarize } from "../services/aiServices.js"

export async function classify(req, res) {
	const {userPrompt} = req.body
	console.log("user prompt " , userPrompt)
	//validating the input
	if(userPrompt.trim()) {
		const result = await aiServiceClassify(userPrompt)
		res.json({
			 result
		})
	}
}
export async function summarize(req, res) {
	const {userPrompt} = req.body
	console.log("user prompt " , userPrompt)
	//validating the input
	if(userPrompt.trim()) {
		const result = await aiServiceSummarize(userPrompt)
		res.json({
			 result
		})
	}
}
