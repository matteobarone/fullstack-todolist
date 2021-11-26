import express from 'express';
import cors from 'cors';
import { connectDb } from './db';
import { router } from './router';

const app = express();
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

console.log('ENVIRONMENT: ', process.env.NODE_ENV);

connectDb()
  .then((res) => {
    console.log(res);
    app.listen(3000, () => console.log('listening on port 3000 💻'));
  });

app.use('/api', router);