import { rootConstants } from '../_constants/rootConstants';
import { createTasks } from '../_helpers/createTasks';

export function getData() {
    return dispatch => {
        return createFakeServer().then(() => {
            dispatch({
                type: rootConstants.get,
                res: createTasks()
            });
        }, err => {
                alert('error');
            }
        );
    }
}

export function saveData(item) {
    return dispatch => {
        return createFakeServer().then(() => {
            alert('Changed successfully!');
            dispatch({
                type: rootConstants.save,
                res: item
            });
        }, err => {
            alert('error');
        });
    }
}

export function newData(item) {
    return dispatch => {
        return createFakeServer().then(() => {
            alert('Added successfully!');
            dispatch({
                type: rootConstants.new,
                res: item
            });
        }, err => {
            alert('error');
        });
    }
}

export function deleteItem(task) {
    return dispatch => {
        return createFakeServer().then(() => {
            alert('Deleted successfully!');
            dispatch({
                type: rootConstants.delete,
                res: task
            });
        }, err => {
            alert('error');
        });
    }
}

function createFakeServer() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(), 1000)
    });
}