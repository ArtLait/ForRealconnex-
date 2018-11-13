import React from 'react';
import ReactDom from 'react-dom';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        this.modalContainer = document.getElementById('modal');
        this.modalContainer.appendChild(this.el);
    }

    componentWillUnMount() {
        this.modalContainer.removeChild(this.el);
    }

    render() {
        return ReactDom.createPortal(
            this.props.children,
            this.el
        )
    }
}