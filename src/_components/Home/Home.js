import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.css';

import { Task } from '../Task/Task';
import { deleteItem } from '../../_actions/data.actions';
import Notification from '../Notification';

const mapStateToProps = (state) => ({
    state: state.rootReducer
})

class Home extends Component {
  state = {
      showNotification: false,
      notificationText: 'Attention' 
  }

  deleteTask(id) {
      this.props.dispatch(deleteItem(id)).then(
          res => {
            this.setState({
                showNotification: true,
                notificationText: res
            })},
          err => {
            this.setState({
                showNotification: true,
                notificationText: err
            })
        });
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
            <button className="add-task button"><Link to='/addTask'>AddTask pagee</Link></button>
            <Notification show={this.state.showNotification} text={this.state.notificationText} />
          </div>
    );
  }
}

const connectedHome = connect(mapStateToProps)(Home);

export {connectedHome as Home};
