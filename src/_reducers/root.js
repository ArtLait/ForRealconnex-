import { rootConstants } from '../_constants/rootConstants';

export function rootReducer(state = {}, action) {
    switch (action.type) {
        case  rootConstants.get: 
            return {
                tasks: action.res
            }

        case rootConstants.save:
            let index;
            state.tasks.some((item, i) => {
                if (item.id === action.res.id) {
                    index = i;
                    return true;
                }
            });
            state.tasks[index] = action.res;
            return Object.assign({}, state);

        case rootConstants.new:
            let newTask = action.res;
            newTask.id = Math.floor(Math.random() * 1000);
            state.tasks.push(newTask);
            return Object.assign({}, state);

        case rootConstants.delete:
            state.tasks.splice(state.tasks.indexOf(action.res), 1);
            return Object.assign({}, state);
    }
}