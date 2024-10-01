const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const router = require('../routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
app.use(cors());

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  res.sendFile(filePath);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
