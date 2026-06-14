import { GoogleGenAI } from "@google/genai";

export const getGeminiAIResponses = async(questionToBeAsked) => {
    try {
        
        const genAI = new GoogleGenAI({
            apiKey: process.env.GEMINI_AI_API_KEY
        });

        const response = await genAI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: questionToBeAsked,
        });

            console.log(response);
            return response.text;
            //res.json(response.text) 
            //res.json({ text: response.text })
    } catch (error) {
        console.log(error);
    }
}