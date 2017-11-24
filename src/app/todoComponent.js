import React from 'react';
import {Link} from 'react-router-dom';

import TodoItem from './todoitem';
import AddTodoItem from './addTodoItem';

//style
import './css/index.css';

//create component
class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                'wash up', 'eat breakfast', '30 minutes of cardio', 'go for a walk'
            ],
            age: 30,
            name: 'Amanda Fernandes'
        };
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this)
    } //get Initial State

    render() {
        var todos = this.state.todos;
        todos = todos.map(function (item, index) {
                    return (<TodoItem item={item} key={index} 
                    onDelete={this.onDelete} />);
                }.bind(this));
        return (
            <div id="todo-list">
                <Link to="/about"> About </Link>
                <p>The busiest people have the most leisure.</p>
                <p>Name:
                    <strong>{this.state.name}</strong>&nbsp; Age:
                    <strong>{this.state.age}</strong>
                </p>
                <ul>
                    {todos}
                </ul>
                <AddTodoItem onAdd={this.onAdd}/>
            </div>
        );
    } //render

    onDelete(item) {
        var updatedTodos = this.state.todos.filter(
            function (val, index) {
                return val !== item;
            });

        this.setState({todos: updatedTodos});
    }

    onAdd(item) {
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({todos:updatedTodos});
    }
}

module.exports = TodoComponent;