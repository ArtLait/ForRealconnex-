import { rootConstants } from '../_constants/rootConstants';

export function rootReducer(state = {}, action) {
    switch (action.type) {
        case  rootConstants.get: 
            return {
                tasks: action.res
            }

        case rootConstants.save:
            state.tasks[action.res.id] = action.res;
            return Object.assign({}, state);

        case rootConstants.new:
            let newTask = action.res;
            newTask.id = Math.floor(Math.random() * 1000);
            state.tasks.push(newTask);
            return Object.assign({}, state);
            
        case rootConstants.delete:
            state.tasks.forEach((item, index) => {
               if (item.id == action.res) {
                 state.tasks.splice(index, 1);
               }     
            });
            return Object.assign({}, state);
    }
}