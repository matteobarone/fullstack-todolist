import express from 'express';
import cors from 'cors';
import { body } from 'express-validator';
import { createTodo, deleteTodo, getTodos, updateTodo } from './controller';
import { validateParams } from './middleware';
import { ApplicationResponse, Todo, TodoRequestBody } from './interface';
import { connectDb } from './db';

const app = express();
app.use(cors());
app.use(express.json());

console.log('ENVIRONMENT: ', process.env.NODE_ENV);

connectDb()
  .then((res) => {
    console.log(res);
    app.listen(3000, () => console.log('listening on port 3000 💻'));
  });

app.get<string, {}, Todo[], {}>(
  '/get',
  async (_, res) => {
    res.json(await getTodos());
    res.end();
  }
);

app.post<string, {}, ApplicationResponse, Partial<TodoRequestBody>>(
  '/create',
  body('value').isString(),
  validateParams,
  async (req, res) => {
    await createTodo({value: req.body.value});
    res.status(201).json({ message: "Todo created correctly" });
    res.end();
  },
);

app.put<string, {}, ApplicationResponse, Partial<TodoRequestBody>>(
  '/update',
  body('id').isNumeric(),
  body('value').isString(),
  body('isCompleted').isBoolean(),
  validateParams,
  async (req, res) => {
    await updateTodo({
      id: req.body.id,
      value: req.body.value,
      isCompleted: req.body.isCompleted,
    });
    res.json({ message: "Todo updated correctly" });
    res.end();
  },
);

app.delete<string, {}, ApplicationResponse, Partial<TodoRequestBody>>(
  '/delete',
  body('id').isNumeric(),
  validateParams,
  async (req, res) => {
    await deleteTodo({id: req.body.id});
    res.send({ message: "Todo deleted correctly" });
    res.end();
  }
);