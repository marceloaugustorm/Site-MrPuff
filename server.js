import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express()
app.use(cors());


app.get("/api/reviews", async (req, res) =>{
    const placeId = "ChIJXwpN295pzpQRtksKtzydMoQ";
    const apiKey = "SUA_API_KEY";
})