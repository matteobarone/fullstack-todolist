import { config } from 'dotenv';
import { Pool } from 'pg';

config();

export const pool = new Pool({
  user: 'me',
  host: process.env.NODE_ENV === 'development' ? 'localhost' : 'db',
  database: 'api',
  password: process.env.POSTGRESS_PASSWORD,
  port: 5432,
});

export const connectDb = async (retries = 5) => {
  while (retries) {
    try {
      await pool.query('SELECT NOW()');
      return 'Connection to DB success 🚀';
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`Retries left: ${retries}`);
      await new Promise(res => setTimeout(res, 5000));
    }
  }

  return 'Impossible to connect to DB ❌';
};