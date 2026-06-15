const promptInput = document.getElementById("prompt");
const sendButton = document.getElementById("sendButton");
const responseArea = document.getElementById("response");

sendButton.addEventListener("click", async () => {
    const prompt = promptInput.value.trim();

    if (!prompt) {
        responseArea.textContent = "Digite um prompt.";
        return;
    }

    sendButton.disabled = true;
    responseArea.textContent = "Pensando...";

    try {
        const response = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt
            })
        });

        const data = await response.json();

        if(!response.ok) {
            throw new Error(data.error);
        }

        responseArea.textContent = data.answer || data.error;
            
    } catch (error) {
        responseArea.textContent = error.message;
    } finally {
        sendButton.disabled = false;
    }
});