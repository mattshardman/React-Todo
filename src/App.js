import React from 'react';
import uuid from 'uuid';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import SearchHeading from './components/TodoComponents/SearchHeading';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    fontFamily: 'Roboto, sans-serif',
  },
};

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    state = {
      currentFormValue: '',
      searchValue: '',
      toDos: [],
    }

    componentDidMount() {
      const persistedState = localStorage.getItem('toDos');
      if (persistedState) {
        const toDoArray = JSON.parse(persistedState);
        this.setState({ toDos: toDoArray });
      }
    }

    changeHandler = (e, name) => {
      const { value } = e.target;
      this.setState({ [name]: value });
    }

    addToDoHandler = (e) => {
      e.preventDefault();
      this.setState((state) => {
        const todoObj = {
          task: state.currentFormValue,
          id: uuid(),
          completed: false,
          display: true,
        };

        const newTodoArray = [
          ...state.toDos, todoObj,
        ];

        localStorage.clear();
        localStorage.setItem('toDos', JSON.stringify(newTodoArray));

        return {
          currentFormValue: '',
          toDos: [...state.toDos, todoObj],
        };
      });
    }

    crossOutTaskHandler = (id) => {
      this.setState((state) => {
        const newToDoArray = state.toDos.map((each) => {
          if (each.id === id) {
            const { completed } = each;
            return {
              ...each,
              completed: !completed,
            };
          }
          return { ...each };
        });

        localStorage.clear();
        localStorage.setItem('toDos', JSON.stringify(newToDoArray));

        return { toDos: newToDoArray };
      });
    }

    removeCompletedHandler = () => {
      this.setState((state) => {
        const newToDoArray = state.toDos.filter(each => !each.completed);
        localStorage.clear();
        localStorage.setItem('toDos', JSON.stringify(newToDoArray));
        return { toDos: newToDoArray };
      });
    }

    searchHandler = (e) => {
      e.preventDefault();

      this.setState((state) => {
        const newToDoArray = state.toDos.map((each) => {
          const searchValue = state.searchValue.toLowerCase();
          const task = each.task.toLowerCase();
          const doesItemMatchSearchTerm = task.includes(searchValue);
          if (!doesItemMatchSearchTerm) {
            return {
              ...each,
              display: false,
            };
          }

          return { ...each };
        });

        localStorage.clear();
        localStorage.setItem('toDos', JSON.stringify(newToDoArray));

        return { toDos: newToDoArray };
      });
    }

    clearSearch = () => {
      this.setState((state) => {
        const newToDoArray = state.toDos.map(each => ({
          ...each,
          display: true,
        }));

        localStorage.clear();
        localStorage.setItem('toDos', JSON.stringify(newToDoArray));
        return {
          searchValue: '',
          toDos: newToDoArray,
        };
      });
    }

    render() {
      const { searchValue, currentFormValue, toDos } = this.state;
      return (
        <div style={styles.container}>
          <h1 style={{ fontSize: 60, color: '#484848' }}>ToDo</h1>
          <SearchHeading
            value={searchValue}
            changeHandler={this.changeHandler}
            clearSearch={this.clearSearch}
            searchHandler={this.searchHandler}
          />
          <TodoList
            toDos={toDos}
            crossOutTaskHandler={this.crossOutTaskHandler}
          />
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
