const { GoogleGenAI } = require("@google/genai");
const { GEMINI_MODEL } = require("../constants/gemini");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function sendPromptToGemini(prompt) {
    const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: prompt
    });

    return response.text;
}

module.exports = {
    sendPromptToGemini
};