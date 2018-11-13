import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.css';

import { Task } from '../Task/Task';
import { deleteItem } from '../../_actions/data.actions';
import Modal from '../Modal/index.js';
import Notification from '../Notification';

class Home extends Component {
  state = {
      showNotification: false,
      notificationText: 'Attention' 
  }

  constructor(props) {
    super(props);
  }

  deleteTask(id) {
      this.props.dispatch(deleteItem(id)).then(
          res => {
              this.setState({
                  showNotification: true,
                  notificationText: 'Deleted successfully'
                })},
          err => this.setState({
            showNotification: true,
            notificationText: err
          }));
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

function mapStateToProps(state) {
    return {state: state.rootReducer};
}

const connectedHome = connect(mapStateToProps)(Home);

export {connectedHome as Home};
