// api/reviews.js

import fetch from 'node-fetch';

export default async function handler(req, res) {
  const apiKey = process.env.API_KEY;
  const placeId = process.env.PLACE_ID;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.result || !data.result.reviews) {
      return res.status(400).json({ error: 'Resposta inválida da API do Google', data });
    }

    res.status(200).json(data.result.reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
