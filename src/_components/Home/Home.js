import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.css';

import { Task } from '../Task/Task';

class Home extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
          <div className="home-container">  
            <div className="tasks-cont">
                {
                    this.props.state
                    &&
                    this.props.state.tasks.map((task, index) => 
                        <Task key={index} task={task}/>
                    )
                    
                }
            </div>
            <button><Link to='/addTask'>AddTask page</Link></button>
          </div>
    );
  }
}

function mapStateToProps(state) {
    return {state};
}

const connectedHome = connect(mapStateToProps)(Home);

export {connectedHome as Home};
