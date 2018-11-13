import { rootConstants } from '../_constants/rootConstants';
import { createTasks } from '../_helpers/createTasks';

export function getData() {
    return dispatch => {
        return createFakeServer().then(() => {
            dispatch({
                type: rootConstants.get,
                res: createTasks()
            });
        });
    }
}

export function saveData(item) {
    return dispatch => {
        return createFakeServer().then(() => {
            dispatch({
                type: rootConstants.save,
                res: item
            });
        });
    }
}

export function newData(item) {
    return dispatch => {
        return createFakeServer().then(() => {
            dispatch({
                type: rootConstants.new,
                res: item
            });
        });
    }
}

export function deleteItem(task) {
    return dispatch => {
        return createFakeServer().then(() => {
            dispatch({
                type: rootConstants.delete,
                res: task
            });
        });
    }
}

function createFakeServer() {
    return new Promise((resolve, reject) => {
        if (Math.random() * 10 > 2)
            setTimeout(resolve('sucess!'), 200)
        else
            setTimeout(reject('Server error.\nPlease try again later!'), 200)
    });
}