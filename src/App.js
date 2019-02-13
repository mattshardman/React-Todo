import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import ToDo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';

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

    addToDoHandler = (e) => {
      e.preventDefault();
      const { currentFormValue, toDos } = this.state;
      const todoObj = {
        task: currentFormValue,
        id: rand(),
        completed: false,
      };
      const newTodoArray = [
        ...toDos, todoObj,
      ];

      this.setState({ currentFormValue: '', toDos: newTodoArray });
    }

    crossOutTaskHandler = (id) => {
      const { toDos } = this.state;
      const toDosCopy = [...toDos];
      const newToDos = toDosCopy.map((each) => {
        if (each.id === id) {
          const { completed } = each;
          return {
            ...each,
            completed: !completed,
          };
        }
        return { ...each };
      });
      this.setState({ toDos: newToDos });
    }

    removeCompletedHandler = () => {
      const { toDos } = this.state;
      const toDosCopy = [...toDos];
      const newToDos = toDosCopy.filter(each => !each.completed);
      this.setState({ toDos: newToDos });
    }

    render() {
      const { currentFormValue, toDos } = this.state;
      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Welcome to your Todo App!</h2>
          <TodoList toDos={toDos} crossOutTaskHandler={this.crossOutTaskHandler} />
          <TodoForm
            value={currentFormValue}
            changeHandler={this.changeHandler}
            addToDoHandler={this.addToDoHandler}
            removeCompletedHandler={this.removeCompletedHandler}
          />
        </div>
      );
    }
}

export default App;
