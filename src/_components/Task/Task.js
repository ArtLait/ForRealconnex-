import React from 'react';
import './Task.css';
import { Link } from 'react-router-dom';

export function Task(props) {
    let {id, title, text} = props.task;
        return (<div className="task">
                <div className="task-wrapper">
                    <div className="id">Id: {id}</div>
                    <div className="task__info">
                        <Link to={'/edit/' + id} >
                            <div className="title">
                                {title} 
                            </div>
                        </Link>
                        <div className="text">{text}</div>
                    </div>
                </div>
            </div>
        )
}