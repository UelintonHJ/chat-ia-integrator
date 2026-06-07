const promptInput = document.getElementById("prompt");
const sendButton = document.getElementById("sendButton");
const responseArea = document.getElementById("response");

sendButton.addEventListener("click", async () => {
    const prompt = promptInput.ariaValueMax.trim();

    if (!prompt) {
        responseArea.textContent = "Digite um prompt.";
        return;
    }

    responseArea.textContent = "Carregando...";

    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt
            })
        });

        const data = await response.json();

        responseArea.textContent = 
            data.answer || data.error;
            
    } catch (error) {
        responseArea.textContent = 
            "Erro ao conectar com o servidor.";

        console.error(erro);
    }
});