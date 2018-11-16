import { rootConstants } from '../_constants/rootConstants';
import { createTasks } from '../_helpers/createTasks';

export function getData() {
    return dispatch => {
        let payload = createFakeServer();
        return payload.then(res => {
            dispatch({
                type: rootConstants.get,
                res: createTasks(),
                payload
            });
        })
    }
}

export function saveData(item) {
    return dispatch => {
        let payload = createFakeServer();
        return payload.then(res => {dispatch({
                type: rootConstants.save,
                res: item,
                payload
            })
            return 'Changed successfully!'
        });
    }
}

export function newData(item) {
    return dispatch => {
        let payload = createFakeServer();
        return payload.then(res => {
            dispatch({
                type: rootConstants.new,
                res: item,
                payload
            });
            return 'Added successfully!'
        })
    }
}

export function deleteItem(task) {
    return dispatch => {
            let payload = createFakeServer();
            return payload.then(res => {
                dispatch(
                {
                    type: rootConstants.delete,
                    res: task,
                    payload
                })
                return 'Deleted succesfully!'
            })
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