import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

const rand = () => Math.floor(Math.random() * 10000000000);

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    state = {
      currentFormValue: '',
      toDos: [],
    }

    changeHandler = (e) => {
      const { value } = e.target;
      this.setState({ currentFormValue: value });
    }

    addToDoHandler = () => {
      const { currentFormValue, toDos } = this.state;
      const todoObj = {
        task: currentFormValue,
        id: rand(),
        completed: false,
      };
      const newTodoArray = [
        ...toDos, todoObj,
      ];

      this.setState({ toDos: newTodoArray });
    }

    render() {
      const { currentFormValue, toDos } = this.state;
      console.log(this.state);
      return (
        <div>
          <h2>Welcome to your Todo App!</h2>
          { toDos.map(toDo => <ToDo />)}
          <TodoForm
            value={currentFormValue}
            changeHandler={this.changeHandler}
            addToDoHandler={this.addToDoHandler}
          />
        </div>
      );
    }
}

export default App;
