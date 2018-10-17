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

export function newData(item) {
    return dispatch => {
        dispatch({
            type: rootConstants.new,
            res: item
        });
    }
}

export function deleteItem(id) {
    return dispatch => {
        dispatch({
            type: rootConstants.delete,
            res: id
        });
    }
}