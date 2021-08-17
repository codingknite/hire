const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Eshop</h1>');
});

module.exports = app;
