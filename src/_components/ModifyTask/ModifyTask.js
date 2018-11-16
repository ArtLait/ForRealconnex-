import React from 'react';
import { connect } from 'react-redux';

import Modal from '../Modal';
import Notification from '../Notification';

import './form.css';

export default function ModifyTask(action, init) {

    const mapStateToProps = (state) => {
        return {state: state.rootReducer};
    }

    const mapDispatchToProps = (dispatch) => (
        {
            action: (option) => (dispatch(action(option)))
        }
    )

    class Modify extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    title: '',
                    text: '',
                    showNotification: false,
                    textForNotification: ''
                };
                this.save = this.save.bind(this);
                this.handleChange = this.handleChange.bind(this);
                this.showNotification = this.showNotification.bind(this);
            }

            componentDidMount() {             
                
                if (init) {
                    init.call(this);
                }
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
                    
                    this.props.action(
                        {
                            id: this.id ? this.id : '',
                            title: this.state.title,
                            text: this.state.text 
                        }
                    )
                    .then((res) => {
                                this.showNotification(res);
                            },
                            (err) => {
                                this.showNotification(err);
                            });
                }
                else {
                    this.showNotification('Message is empty');
                }
            }

            showNotification(message) {
                this.setState((prevState) => {
                    prevState.textForNotification = message;
                    prevState.showNotification = true;
                    return prevState;
                });
            }

            render() {
                return(<form className='edit-form' onSubmit={this.save}>
                    <input name="title" value={this.state.title} onChange={this.handleChange} placeholder="Enter the title"/>
                    <input name="text"  value={this.state.text} onChange={this.handleChange} placeholder="Enter the text"/>
                    <input type="submit" value="Save" />
                    <Modal>
                        <Notification
                                show={this.state.showNotification}
                                text={this.state.textForNotification}
                                callback={() => this.props.history.push('/')} />
                    </Modal>
                </form>)
            }
        }

    const connectedModify = connect(mapStateToProps, mapDispatchToProps)(Modify);
    return connectedModify;
}