import React from 'react';
import {render} from 'react-dom';

//create component
class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state  =  {
            todos:['wash up','eat breakfast','30 minutes of cardio','go for a walk'],
            age:30,
            name:'Amanda Fernandes'
        };
        
    } //get Initial State
    
    render() {
        var todos = this.state.todos;
        todos=todos.map(function(item,index){
            return (
                <li>{item}</li>
            );
        });
        return (
            <div> 
                <p>The busiest people have the most leisure.</p>
                <p>Name: <strong>{this.state.name}</strong>&nbsp;
                    Age: <strong>{this.state.age}</strong>
                </p>
            <ul>
            {todos}
            </ul>
            </div>
        );
    } //render
}

//render to DOM
render(
    <TodoComponent />,
    document.getElementById('todo-wrapper'));