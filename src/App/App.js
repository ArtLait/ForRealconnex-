import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Home } from '../_components/Home/Home';
import EditTask from '../_components/ModifyTask/EditTask';
import AddTask from '../_components/ModifyTask/AddTask';
import { Link, withRouter } from 'react-router-dom';

import { getData } from '../_actions/data.actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNotEmptyData: true,
      errMessage: ''
    };
  }

  componentDidMount() {
    this.props.dispatch(getData()).catch(err => {
      alert(err + '\nPlease, reload the page!');
      this.setState({isNotEmptyData: false, errorMessage: err});
    });
  }

  appContainer() {
    if (this.state.isNotEmptyData) {
      return <div>
        <Link to='/'>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        
        <Route exact path="/" component={Home} />
        <Route path="/edit/:id" component={EditTask} />
        <Route path="/addTask" component={AddTask} />
      </div>
    }
    else {
      return <h1>{this.state.errorMessage}</h1>
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.appContainer()}
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {state: state.rootReducer};
}

const connectedApp = withRouter(connect(mapStateToProps)(App));
export { connectedApp as App };