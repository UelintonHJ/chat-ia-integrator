const ERROR_MESSAGES = {
    EMPTY_PROMPT:
        "O prompt não pode estar vazio.",

    QUOTA_EXCEEDED:
        "A API do Gemini atingiu o limite de uso da cota diária gratuita. Tente novamente mais tarde.",

    SERVICE_UNAVAILABLE:
        "A IA está temporariamente indisponível. Tente novamente em alguns instantes.",

    INTERNAL_SERVER_ERROR:
        "Erro interno do servidor."
};

module.exports = {
    ERROR_MESSAGES
};