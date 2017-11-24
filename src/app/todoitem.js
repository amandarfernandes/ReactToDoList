import './css/todoitem.css';
import React from 'react';

//TodoItem  component
class TodoItem extends React.Component {
    render() {
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>&nbsp;
                    <span
                        className="item-delete"
                        onClick={this.itemDelete.bind(this)}>
                        x
                    </span>
                </div>
            </li>
        );
    }

    itemDelete() {
        this
            .props
            .onDelete(this.props.item);
    }
}

module.exports = TodoItem;