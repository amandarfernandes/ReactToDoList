import React from 'react';
import {render} from 'react-dom';


//create component
class TodoComponent extends React.Component {
    render() {
         /*return (<div>
                <!--<h1>Welcome Ninjas!</h1>
                <p> This is my first React Component...</p>
                <p> {this.props.msg} </p>
                </div>);*/
        return (<div>
            <p>Cheese Name: <strong>{this.props.cheese.name}</strong></p>
            <p>Aged : <strong>{this.props.cheese.agedyears} years</strong> </p>
            <p>Texture : <strong>{this.props.cheese.texture}</strong> </p>
            <p>Origin : <strong>{this.props.cheese.origin}</strong> </p>
        </div>);
    }
}


//render to DOM
//render(<TodoComponent msg="I like CHEESE"/>,
//    document.getElementById('todo-wrapper'));

var myCheese = {
    name:'West Country Farmhous Cheddar',
    color: 'off-white',
    origin: 'Somerset',
    texture:'hard',
    agedyears: '1.5'
}
render(
    <TodoComponent msg="I like CHEESE" cheese= {myCheese}/>,
    document.getElementById('todo-wrapper'));