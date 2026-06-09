function validatePrompt(prompt) {
    if (!prompt || prompt.trim() === "") {
        throw new Error("O prompt não pode estar vazio.");
    }

    return true;
}

function validateResponse(answer) {
    return Boolean(answer && answer.trim());
}

module.exports = {
    validatePrompt,
    validateResponse
};