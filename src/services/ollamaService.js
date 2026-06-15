async function sendPromptToOllama(prompt) {
    try {
        console.log("Chamando Ollama com prompt:", prompt);

        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama3",
                prompt,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`Ollama HTTP error: ${response.status}`);
        }

        const data = await response.json();

        return data.response;
    } catch (error) {
        console.error("FULL OLLAMA ERROR:", error);
        throw error;
    }
}

module.exports = {
    sendPromptToOllama
}