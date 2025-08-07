import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import reviewsRouter from './reviews.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Rota /reviews
app.use('/reviews', reviewsRouter);

app.get('/', (req, res) => {
  res.send('API da Mr. Puff está no ar 🚀');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
