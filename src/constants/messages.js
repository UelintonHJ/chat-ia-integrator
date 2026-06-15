const ERROR_MESSAGES = {
    EMPTY_PROMPT:
        "O prompt não pode estar vazio.",

    QUOTA_EXCEEDED:
        "Ollama não está respondendo ou atingiu limite local.",

    SERVICE_UNAVAILABLE:
        "IA local não está rodando (Ollama).",

    INTERNAL_SERVER_ERROR:
        "Erro interno do servidor."
};

module.exports = {
    ERROR_MESSAGES
};