import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers/rootReducer';

// List of properties we expect to recive 
interface AppProps {
  todos: Todo[];
  fetchTodos: Function;             // because of the behavior between redux, react-redux, and redux-thunk, we have to define with the keyword Function as an expected return
  deleteTodo: typeof deleteTodo;    // specific type of deleteTodo
}

// we can define an interface to describe the structure of the state and then pass in as a second argument to a generic, and then initialize the state object inside a constructor
// we can define the state without a constructor too
interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if(!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  // Bound Function Event Handler:
  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true});
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      )
    })
  }

  render() {
    return (
    <div>
      <button onClick={this.onButtonClick} >Fetch</button>
      {this.state.fetching ? 'LOADING' : null}
      {this.renderList()}
    </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
}

// connect() first set of parenthesis for configuration, second for the component we want to merge everithing on
export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App);





/* 
  To pass in properties into components we have to define an interface with the properties we want to pass in and annotate the component
  Component is actually a Generic Class when ever we make use of React.Component we can especify the structure of props we expect to pass in
  by passing it as a <GENERIC> as the first argument

  So in every class based component we create on React we have to define the component, then the properties in an interface right above it, that describes the structure of props that you spect to pass in, 
  and then reference that interface right next to the React.Component as <Generic> first argument

*/

/* 
  FUNCTIONAL COMPONENT:

  conte App = (props: AppProps): JSX.Element => {
    return <div>{props.color}</div>
  }

  we annotate the return JSX.Element to say we expect some JSX from a function
*/