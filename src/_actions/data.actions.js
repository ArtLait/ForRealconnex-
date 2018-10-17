import { rootConstants } from '../_constants/rootConstants';
import { createTasks } from '../_helpers/createTasks';

export function getData() {
    return dispatch => {
        createFakeServer().then(() => {
            dispatch({
                type: rootConstants.get,
                res: createTasks()
            });
        });
    }
}

export function saveData(item) {
    return dispatch => {
        createFakeServer().then(() => {
            alert('Changed successfully!');
            dispatch({
                type: rootConstants.save,
                res: item
            });
        });
    }
}

export function newData(item) {
    return dispatch => {
        createFakeServer().then(() => {
            alert('Added successfully!');
            dispatch({
                type: rootConstants.new,
                res: item
            });
        });
    }
}

export function deleteItem(id) {
    return dispatch => {
        createFakeServer().then(() => {
            alert('Deleted successfully!');
            dispatch({
                type: rootConstants.delete,
                res: id
            });
        });
    }
}

function createFakeServer() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(), 1000)
    });
}