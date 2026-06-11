const { sendPromptToGemini } = require("../services/geminiService");
const { validatePrompt } = require("../utils/chatValidation")
const { ERROR_MESSAGES } = require("../constants/messages")

async function sendMessage(req, res) {
    try {
        const { prompt } = req.body;

        validatePrompt(prompt);

        const answer = await sendPromptToGemini(prompt);

        return res.status(200).json({
            answer
        });

    } catch (error) {
        console.error(error);

        if (error.message === ERROR_MESSAGES.EMPTY_PROMPT) {
            return res.status(400).json({
                error: ERROR_MESSAGES.EMPTY_PROMPT
            });
        }

        if (error.status === 429) {
            return res.status(429).json({
                error: ERROR_MESSAGES.QUOTA_EXCEEDED
            })
        }

        if (error.status === 503) {
            return res.status(503).json({
                error: ERROR_MESSAGES.SERVICE_UNAVAILABLE
            });
        }

        return res.status(500).json({
            error: ERROR_MESSAGES.INTERNAL_SERVER_ERROR
        });
    }
}

module.exports = {
    sendMessage
};