import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState {
  todos: Todo[];
}

export const rootReducer = combineReducers<StoreState>({
  todos: todosReducer
})

/* 
  combien Reducers is going to turn our Redux State = { todos: [Todo, Todo, Todo] }
*/