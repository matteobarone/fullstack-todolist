import express from 'express';
import cors from 'cors';
import { createTodo, deleteTodo, getTodos, TodoRequestBody, updateTodo } from './todos';

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, function() {
  console.log('listening on 3000');
});

app.get('/get', async (_, res) => {
  res.json(await getTodos());
  res.end();
});

app.post<string, {}, string, TodoRequestBody>('/create', async (req, res) => {
  await createTodo(req.body);
  res.status(201);
  res.send('Todo insert correctly!\n');
  res.end();
});

app.put<string, {}, string, TodoRequestBody>('/update', async (req, res) => {
  await updateTodo(req.body);
  res.send('Todo updated correctly!\n');
  res.end();
});

app.delete<string, {}, string, TodoRequestBody>('/delete', async (req, res) => {
  await deleteTodo(req.body);
  res.send('Todo delete correctly!\n');
  res.end();
});