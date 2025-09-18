import OpenAI from "openai";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
if (!OPENROUTER_API_KEY) {
  throw new Error("OPENROUTER_API_KEY is not set");
}

class LLMprovider {
    private openai : OpenAI

    constructor(){
        this.openai = new OpenAI({
            baseURL: 'https://openrouter.ai/api/v1',
            apiKey: OPENROUTER_API_KEY,
        })
    }

    async processQuery(query : string) {
        const completion = await this.openai.chat.completions.create({
            model : 'deepseek/deepseek-chat-v3.1:free',
            messages : [
                {
                    role: "user",
                    content: query
                }
            ]
        })

        return completion.choices[0].message.content
    }
}

export const llmProvider = new LLMprovider()