import Modify from './ModifyTask';

export default function(component, props) {
    component.props.push(props);
    return component
}