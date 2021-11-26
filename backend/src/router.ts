import express from 'express';
import { body } from 'express-validator';
import { createTodo, deleteTodo, getTodos, updateTodo } from './controller';
import { ApplicationResponse, Todo, TodoRequestBody } from './interface';
import { validateParams } from './middleware';

export const router = express.Router();

router.get<string, {}, Todo[], {}>(
  '/get',
  async (_, res) => {
    res.json(await getTodos());
    res.end();
  }
);

router.post<string, {}, ApplicationResponse, Partial<TodoRequestBody>>(
  '/create',
  body('value').isString(),
  validateParams,
  async (req, res) => {
    const { value } = req.body;
    await createTodo({ value });
    res.status(201).json({ message: "Todo created correctly" });
    res.end();
  },
);

router.put<string, {}, ApplicationResponse, Partial<TodoRequestBody>>(
  '/update',
  body('id').isNumeric(),
  body('value').isString(),
  body('isCompleted').isBoolean(),
  validateParams,
  async (req, res) => {
    const { id, value, isCompleted } = req.body;
    await updateTodo({ id, value, isCompleted });
    res.json({ message: "Todo updated correctly" });
    res.end();
  },
);

router.delete<string, {}, ApplicationResponse, Partial<TodoRequestBody>>(
  '/delete',
  body('id').isNumeric(),
  validateParams,
  async (req, res) => {
    const { id } = req.body;
    await deleteTodo({ id });
    res.json({ message: "Todo deleted correctly" });
    res.end();
  }
);