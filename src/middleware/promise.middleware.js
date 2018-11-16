export default (store) => (next) => (action) => {
    if (isPromise(action.payload)) {
        store.dispatch({type: 'ASYNC_START', subtype: action.type});
        // Do something
        action.payload.then((res) => {
            // Do something
            store.dispatch({type: 'ASYNC_END'});
        },
        err => {
            // Do something
            action.error = true;
            store.dispatch({type: 'ASYNC_END'})
        });
    }
    return next(action);
}

function isPromise(v) {
    return v && typeof v.then === 'function';
}