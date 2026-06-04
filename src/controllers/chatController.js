const { sendPromptGemini, sendPromptToGemini } = require("../services/geminiService");

async function sendMessage(req, res) {
    try {
        const { prompt } = req.body;

        if (!prompt || prompt.trim() === "") {
            return res.status(400).json({
                error: "O prompt não pode estar vazio."
            });
        }

        const answer = await sendPromptToGemini(prompt);

        return res.status(200).json({
            answer
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Erro ao processar a solicitação."
        });
    }
}

module.exports = {
    sendMessage
};