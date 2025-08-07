import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import reviewsRouter from './reviews.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API routes
app.use('/reviews', reviewsRouter);

// Serve front-end static files (ajuste o caminho se necessário)
app.use(express.static(path.join(__dirname, '../dist')));

// Catch-all para SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
