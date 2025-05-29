// Declaring Needed Constants (We already installed these packages just now)
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: '3.25.109.57',
  user: 'foa-testing',
  password: 'foa123',
  database: 'mydatabase',
  port: 5432
});

app.get('/', async (req, res) => {
  try 
  {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});