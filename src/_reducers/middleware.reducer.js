export function middleWareReducer(state = {}, action) {
    switch(action.type) {
        case 'ASYNC_START':
        console.log('async start');
        return state
        case 'PENDING':
        return state
        case 'ASYNC_END':
        return state
    }
}