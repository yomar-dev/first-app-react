import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';
import TodoForm from './components/TodoForm';

class App extends Component {
    constructor(){
        super();

        this.state = {
            todos
        }

        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(todo){
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    render() {
        const todos = this.state.todos.map((todo, i) => {
            return(
                <div className="col-md-4 mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>{todo.title}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                {todo.priority}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{todo.description}</p>
                            <p><strong>{todo.responsible}</strong></p>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark">
                    <a href="#" className="text-white">
                        Task
                        <span className="badge badge-pill badge-light ml-2">
                            {this.state.todos.length}
                        </span>
                    </a>

                </nav>

                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-4 text-center">
                            <img src={logo} className="App-logo" alt="logo" />
                            <TodoForm onAddTodo={this.handleAddTodo} />
                        </div>

                    <div className="col-md-8">
                        <div className="row">
                            {todos}
                        </div>
                    </div>
                  </div>
                </div>

            </div>
        );
    }
}

export default App;
