const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({
            error: "Prompt não pode ser vazio"
        });
    }

    return res.json({
        answer: "Respota temporária do sistema (mock)"
    });
});

module.exports = router;