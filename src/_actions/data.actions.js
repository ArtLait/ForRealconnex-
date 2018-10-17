import { rootConstants } from '../_constants/rootConstants';
import { createTasks } from '../_helpers/createTasks';

export function getData() {
    return dispatch => {
        dispatch({
            type: rootConstants.get,
            res: createTasks()
        });
    }
}

export function saveData(item) {
    return dispatch => {
        dispatch({
            type: rootConstants.save,
            res: item
        });
    }
}