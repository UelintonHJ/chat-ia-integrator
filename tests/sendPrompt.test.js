const {
    validatePrompt
} = require("../src/utils/chatValidation");

describe("Validação de Prompt", () => {
    test("Deve lançar erro quando o prompt estiver vazio", () => {
        expect(() => {
            validatePrompt("");
        }).toThrow("O prompt não pode estar vazio.");
    });

    test("Deve aceitar prompt válido", () => {
        expect(validatePrompt("Olá IA")).toBe(true);
    });
});