import { pool } from "../db";
import { Todo } from "../interface";

export const getTodos = async () => {
  const result = await pool.query<Todo>('SELECT * FROM todos ORDER BY id ASC');
  return result.rows;
};

export const createTodo = async ({ value }: Partial<Todo>) => {
  const result = await pool.query('INSERT INTO todos (value, isCompleted) VALUES ($1, FALSE)', [value]);
  return result;
}

export const updateTodo = async ({ id, value, isCompleted }: Partial<Todo>) => {
  const result = await pool.query('UPDATE todos SET value = $1, isCompleted = $2 WHERE id = $3', [value, isCompleted, id]);
  return result;
}

export const deleteTodo = async ({ id }: Partial<Todo>) => {
  const result = await pool.query('DELETE FROM todos WHERE id = $1', [id]);
  return result;
}