const fetch = require('node-fetch');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

const apiKey = "AIzaSyBh040GemOGy4FzcApEEXyJOTZL0k-I0X4";
const placeId = "ChIJxcp-xFFpzpQRRdtbr-jwub8";

app.get("/reviews", async (req, res)=>{

    try{
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;
        const response = await fetch(url)

        const data = await response.json()

        res.json(data.result.reviews);


    }catch(error){
        console.log("Erro", error.message)
        res.status(500).json({"erro": response.message});
    }
}
)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});