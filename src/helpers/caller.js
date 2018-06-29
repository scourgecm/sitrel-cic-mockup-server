import * as Actions from '../store/actions';

export function injectAsyncCall(store, agent, timeoutInSeconds) {
    setTimeout(() => {
        store.dispatch(Actions.injectCall(agent));
    }, timeoutInSeconds * 1000);
}
