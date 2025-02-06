const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/produtoRoutes'));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
app.use(express.static('public'));