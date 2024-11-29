const express = require('express');
const dotenv = require('dotenv');
const orderRoutes = require('./routes/orderRoutes');
const returnRoutes = require('./routes/returnRoutes');
const disputeRoutes = require('./routes/disputeRoutes');
const db = require('./config/db');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/orders', orderRoutes);
app.use('/returns', returnRoutes);
app.use('/disputes', disputeRoutes);

(async () => {
  try {
    await db.query('SELECT 1');
    console.log('PostgreSQL database connected successfully.');
  } catch (err) {
    console.error('Failed to connect to the PostgreSQL database:', err.message);
    process.exit(1);
  }
})();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
