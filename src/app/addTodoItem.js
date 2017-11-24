import React from 'react';
import './css/addtodo.css';

class AddTodoItem extends React.Component {
    render () {
        return (
           <form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
           <input type="text" required ref="newItem"/>
           <input type="submit" value="Add New Todo" />
           </form>
        );
    } //render

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    } // handleSubmit
    
} // AddTodoItem

module.exports=AddTodoItem;