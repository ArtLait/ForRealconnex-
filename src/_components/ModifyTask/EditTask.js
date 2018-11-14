import ModifyTask from './ModifyTask';
import { saveData } from '../../_actions/data.actions';

let componentDidMount2 = function() {
    this.id = +this.props.match.params.id;
    let task;
    if (!this.props.state.tasks) return
    this.props.state.tasks.some((item, index) => {
        if (item.id === this.id) {
            task = item;
            return true;
        }
        return false;
    });

    this.setState({
        title: task.title,
        text: task.text
    });
}

export default ModifyTask(saveData, componentDidMount2);