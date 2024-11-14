const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

let apiArrayData = [];
let apiKey = {
    key: "3fe2a84b-3f3b-4054-9284-01beacf7c21a"
};

app.get('/', async (req, res) => {
    try {
        const response = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=" + apiKey.key);

        apiArrayData = response.data.data.map(item => ({
            id: item.id,
            name: item.name,
            symbol: item.symbol,
            price: item.quote.USD.price,
            percent_change: item.quote.USD.percent_change_24h
        }));

        // Retorna as 06 primeiras moedas
        res.json(apiArrayData.sort((a, b) => a.rank - b.rank).slice(0, 6));

    } catch (error) {
        console.error("Erro ao executar a requisição:", error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
