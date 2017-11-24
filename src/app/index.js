import React from 'react';
import {render} from 'react-dom';
//import {Router, Route, browserHistory} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch,Route} from 'react-router-dom';
//module imports
import TodoComponent from './todoComponent';
import About from './about';

class App extends React.Component {
    render(){
        return (
            <Router>
                <Switch>
                <Route path='/about' component={About}></Route>
                <Route path='/' component={TodoComponent} ></Route>
                </Switch>
            </Router>
        );
    }
}
//render to DOM
render(
    <App />,
    document.getElementById('todo-wrapper'));