import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EditPage.css';

import { saveData } from '../../_actions/data.actions';

class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        };
        this.save = this.save.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.id = +this.props.match.params.id;
        let task;
        this.props.state.tasks.some((item, index) => {
            if (item.id === this.id) {
                task = item;
                return true;
            }
        });

        this.setState({
            title: task.title,
            text: task.text
        });
    }

    handleChange(event) {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let state = this.state;
        state[name] = value;
        this.setState(state);
    }

    save(event) {
        event.preventDefault();
        if (this.state.title && this.state.text) {
            this.props.dispatch(saveData({
                id: this.id,
                title: this.state.title,
                text: this.state.text 
            })).then(() => this.props.history.push('/'));
        }
        else {
            alert('Data is empty');
        }
    }

    render() {
        return(<form className='edit-form' onSubmit={this.save}>
            <input name="title" value={this.state.title} onChange={this.handleChange} placeholder="Enter the title"/>
            <input name="text"  value={this.state.text} onChange={this.handleChange} placeholder="Enter the text"/>
            <input type="submit" value="Save" />
        </form>)
    }
}

function mapStateToProps(state) {
    return {state};
}

const connectedEditPage = connect(mapStateToProps)(EditPage);

export {connectedEditPage as EditPage};