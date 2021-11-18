import { ValidationError } from 'express-validator';

interface ApplicationSuccessResponse {
  message: string
}

interface ApplicationErrorResponse {
  errors: ValidationError[]
}

export type ApplicationResponse = ApplicationSuccessResponse | ApplicationErrorResponse;

export interface Todo {
  id: number;
  value: string;
  isCompleted: boolean;
}

export interface TodoRequestBody {
  id: number;
  value: string;
  isCompleted: boolean;
}