import React from 'react';
import {render} from 'react-dom';


//create component
class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state  =  {
            todos:['wash up','eat breakfast','30 minutes of cardio'],
            age:30,
            name:'Amanda Fernandes'
        };
        
    } //get Initial State
    
    render() {
        var ager = setTimeout(function() {
            this.setState({
                age: 32
            });
        }.bind(this),5000);
        return (
            <div> 
                <p>The busiest people have the most leisure.</p>
                <p>Name: <strong>{this.state.name}</strong>&nbsp;
                    Age: <strong>{this.state.age}</strong>
                </p>
            <ul>
            <li>{this.state.todos[0]}</li>
            <li>{this.state.todos[1]} </li>
            <li>{this.state.todos[2]} </li>
            </ul>
            </div>
        );
    } //render
}

//render to DOM
render(
    <TodoComponent />,
    document.getElementById('todo-wrapper'));