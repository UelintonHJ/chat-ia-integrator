require("dotenv").config()

const express = require("express");
const cors = require("cors");
const path = require("path");

const chatRoutes = require("./routes/chatRoutes");

const app = express();

const PUBLIC_PATH = path.join(__dirname, "public");

app.use(cors());
app.use(express.json());

app.use(express.static(PUBLIC_PATH));

app.use("/chat", chatRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})