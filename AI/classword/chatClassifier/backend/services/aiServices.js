import {ChatGroq} from '@langchain/groq'
import {PromptTemplate} from "@langchain/core/prompts"
import {z} from "zod"

const model = new ChatGroq({
	model:"llama-3.1-8b-instant",
	temperature:0,
	apiKey: process.env.GROQ_API_KEY
})
export async function aiServiceClassify(text) {
	const prompt = PromptTemplate.fromTemplate(
		`You are a support ticket classifier.

		Analyze the following user input.

		Determine:
		- category
		- priority
		- confidence

		User input:
		{input} `
	)
	const classificationSchema = z.object({
		category : z.string(),
		priority : z.enum(["low", "medium" , "high"]),
		confidence : z.number()
	})
	const structuredModel = model.withStructuredOutput(classificationSchema)
	const chain = prompt.pipe(structuredModel)
	const response = await chain.invoke({
		input : text
	})	
	console.log(response)
	return response
}
export async function aiServiceSummarize(text) {
	const prompt = PromptTemplate.fromTemplate(
		`You are a text summarization assistant.

		Summarize the following user input in one or two sentences.
		Keep the important information.
		Do not add information that isn't present.

		User input:
		{input} `
	)
	const chain = prompt.pipe(model)
	const response = await chain.invoke({
		input : text
	})	
	console.log(response.content)
	return response.content
}