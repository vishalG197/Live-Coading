const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

const playerRoutes = require('./routes/playerRoutes');
app.use('/api', playerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





 