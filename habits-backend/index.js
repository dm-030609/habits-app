require('dotenv').config();
console.log("Variável de ambiente MONGO_URI:", process.env.MONGO_URI);
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");


//Configuração do express
app.use(cors());
app.use(express.json());

console.log(process.env.MONGO_URI); // Verifica se o valor da URI está correto
//Conexão com mongoDB
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.error("Erro ao conectar ao MongoDB", err));

    //Rota inicial
app.get("/", (req, res) => res.send("API rodando!"));

//Iniciar  o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

