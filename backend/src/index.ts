import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, function() {
  console.log('listening on 3000');
});

app.post('/create', (req, res) => {
  console.log(req.body);
  res.json(req.body);
  res.end();
});

app.put('/update', (req, res) => {
  console.log(req.body);
  res.json(req.body);
  res.end();
});

app.put('/delete', (req, res) => {
  console.log(req.body);
  res.json(req.body);
  res.end();
});