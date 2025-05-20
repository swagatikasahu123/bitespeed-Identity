import express from 'express';
import dotenv from 'dotenv';
import identifyRoute from './routes/identifyRoute';
import { createTableQuery } from './db/contact-table-creation';
import { pool } from './db/index';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

async function createContactTable() {
  try {
    await pool.query(createTableQuery);
    console.log('Contact table initialized successfully.');
  } catch (err) {
    console.error('Error initializing Contact table:', err);
  } 
}

createContactTable();

app.use(express.json());


app.use('/', identifyRoute);

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
