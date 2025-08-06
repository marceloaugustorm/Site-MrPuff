require('dotenv').config();
const fetch = require('node-fetch');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

const apiKey = process.env.GOOGLE_API_KEY;
const placeId = process.env.PLACE_ID;

app.get("/reviews", async (req, res) => {
    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        res.json(data.result?.reviews || []);
    } catch (error) {
        console.error("Erro", error.message);
        res.status(500).json({ erro: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
