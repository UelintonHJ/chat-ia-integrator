const {
    validateResponse
} = require("../src/utils/chatValidation");

describe("Validação de Resposta", () => {
    test("Deve retornar true quando existir conteúdo", () => {
        expect(validateResponse("Olá")).toBe(true);
    });

    test("Deve retornar false quando estiver vazia", () => {
        expect(validateResponse("")).toBe(false);
    });
});