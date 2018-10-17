import React from 'react';
import './Task.css';
import { Link } from 'react-router-dom';

export function Task(props) {
    let {id, title, text} = props.task;
        return (<div className="task">
                <div className="task-wrapper">
                    <div className="id">Id: {id + 1}</div>
                    <div className="task__info">
                        <Link to={'/edit/' + id} >
                            <div className="title">
                                {title} 
                            </div>
                        </Link>
                        <div className="text">{text}</div>
                        <button onClick={(e)=>props.deleteTask(props.task)}>Delete</button>
                    </div>
                </div>
            </div>
        )
}