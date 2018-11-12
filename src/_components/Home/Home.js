import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.css';

import { Task } from '../Task/Task';
import { deleteItem } from '../../_actions/data.actions';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  deleteTask(id) {
      this.props.dispatch(deleteItem(id)).catch(err => alert(err));
  }

  render() {
    return (
          <div className="home-container">  
            <div className="tasks-cont">
                {
                    this.props.state.tasks
                    &&
                    this.props.state.tasks.map((task, index) => 
                        <Task key={index} deleteTask={this.deleteTask.bind(this)} index={index} task={task}/>
                    )
                    
                }
            </div>
            <button className="add-task button"><Link to='/addTask'>AddTask page</Link></button>
          </div>
    );
  }
}

function mapStateToProps(state) {
    return {state: state.rootReducer};
}

const connectedHome = connect(mapStateToProps)(Home);

export {connectedHome as Home};
