import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());

const apiKey = process.env.API_KEY;
const placeId = process.env.PLACE_ID;

app.get('/api/reviews', async (req, res) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log('Resposta da API Google:', data);

    if (!data.result || !data.result.reviews) {
        console.log('API Key:', apiKey);
        console.log('Place ID:', placeId);

      return res.status(400).json({ error: 'Resposta inválida da API do Google', data });
      
    }
    res.json(data.result.reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});
