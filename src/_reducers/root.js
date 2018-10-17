import { rootConstants } from '../_constants/rootConstants';

export function rootReducer(state = {}, action) {
    switch (action.type) {
        case  rootConstants.get: 
        return {
            tasks: action.res
        }
        case rootConstants.save:
        console.log(state);
        state.tasks[action.res.id] = action.res;
        console.log(state);
        return Object.assign({}, state);
    }
}