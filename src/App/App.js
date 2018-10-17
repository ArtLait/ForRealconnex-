import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';

import { Home } from '../_components/Home/Home';
import { EditPage } from '../_components/EditPage/EditPage';
import { AddTaskPage } from '../_components/AddTaskPage/AddTaskPage';
import { Link } from 'react-router-dom';

import { getData } from '../_actions/data.actions';

export const history = createBrowserHistory();

class App extends Component {

  constructor(props) {
    super(props);
    this.props.dispatch(getData());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Router history={history}>
          <div>
            <Link to='/'>
              <img src={logo} className="App-logo" alt="logo" />
            </Link>  
          
              <Route exact path="/" component={Home} />
              <Route path="/edit/:id" component={EditPage} />
              <Route path="/addTask" component={AddTaskPage} />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {state};
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App } ;
