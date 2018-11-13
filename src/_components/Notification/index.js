import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
});

class Notification extends React.Component {
    state = {
        open: true,
    };

    shouldComponentUpdate(props, state) {
        if (this.props !== props) {
            this.setState({
                open: props.show
            });
            return false;
        }
        return true;
    }
    
    handleClose = () => {
        this.setState({ open: false });
        if (this.props.callback) {
            this.props.callback();
        }
    };

    render() {
        const { classes, show, text } = this.props;
        return (
            <div>
                <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open && show}
                onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="h6" id="modal-title">
                            Notification
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            {text}
                        </Typography>
                    </div>
                </Modal>
            </div>
        )
    }
}

const NotificationWrapped = withStyles(styles)(Notification);

export default NotificationWrapped;
