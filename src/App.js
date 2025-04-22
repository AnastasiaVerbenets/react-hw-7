import { Component } from 'react';
import './App.css';
import { TaskList } from './components/TaskList/TaskList';
import todos from "./todos.json"
import { Dropdown } from './components/Dropdown/Dropdown';

class App extends Component {
    state = { todos };

    deleteTodo = (todoId) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId)
        }));
    }

    render() {
        const { todos } = this.state;

        return (
            <>
                <TaskList onDeleteTodo={this.deleteTodo} todos={todos} />
                <Dropdown />
            </>
        );
    }
}

export default App;