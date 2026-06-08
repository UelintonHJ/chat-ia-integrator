const { sendPromptToGemini } = require("../services/geminiService");

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

        if (error.status === 429) {
            return res.status(429).json({
                error: "A API do Gemini atingiu o limite de uso da cota diária gratuita. Tente novamente mais tarde."
            })
        }

        if (error.status === 503) {
            return res.status(503).json({
                error: "A IA está temporariamente indisponível. Tente novamente em alguns instantes."
            });
        }

        return res.status(500).json({
            error: "Erro interno do servidor."
        });
    }
}

module.exports = {
    sendMessage
};