import { Todo, ActionTypes, Action } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch(action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
      case ActionTypes.deleteTodo:
        return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
}


/* 
   Switch Statement works in a form of type guard
   So we narrowing down the possible type of that Action
   to a fetchTodos Action or a deleteTodo Action
   And because of this we are a 100% certain about all the diferent properties that exists inside of all this diferent cases
   ex: action.payload = Todo[]
*/