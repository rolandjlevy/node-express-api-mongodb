const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const router = require('../routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authorizedOrigins = (process.env.AUTHORIZED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim());

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || authorizedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders:
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  credentials: true
};

app.use(cors(corsOptions));
app.use('/api', router);

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  res.sendFile(filePath);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
