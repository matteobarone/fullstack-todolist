import { config } from 'dotenv';
import { Pool } from 'pg';

config();

export const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: process.env.POSTGRESS_PASSWORD,
  port: 5432,
});