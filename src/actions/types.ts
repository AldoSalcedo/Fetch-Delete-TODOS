import { FetchTodosAction, DeleteTodoAction } from "./todos";

// Enum to work with hard coded Strings
export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

// Type Alias
export type Action = FetchTodosAction | DeleteTodoAction;