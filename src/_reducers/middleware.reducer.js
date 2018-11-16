export function middleWareReducer(state = {}, action) {
    switch(action.type) {
        case 'ASYNC_START':
        //some logic
        return state

        case 'PENDING':
        //some logic
        return state
        
        case 'ASYNC_END':
        //some logic
        return state
    }
}