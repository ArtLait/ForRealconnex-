import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.css';

import { Task } from '../Task/Task';
import { deleteItem } from '../../_actions/data.actions';

class Home extends Component {

  deleteTask(task) {
      this.props.dispatch(deleteItem(task));
  }

  render() {
    return (
          <div className="home-container">  
            <div className="tasks-cont">
                {
                    this.props.state 
                    &&
                    this.props.state.tasks.map((task, index) => 
                        <Task key={index} deleteTask={this.deleteTask.bind(this)} task={task}/>
                    )
                    
                }
            </div>
            <button className="add-task"><Link to='/addTask'>AddTask page</Link></button>
          </div>
    );
  }
}

function mapStateToProps(state) {
    return {state};
}

const connectedHome = connect(mapStateToProps)(Home);

export {connectedHome as Home};
