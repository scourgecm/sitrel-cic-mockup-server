import * as Actions from '../store/actions';

export function injectAsyncCall(store, agent, timeoutInSeconds) {
    setTimeout(() => {
        console.log('Call injected to user ' + agent);
        store.dispatch(Actions.injectCall(agent));
    }, timeoutInSeconds * 1000);
}
