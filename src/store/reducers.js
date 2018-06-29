import { Map, fromJS } from 'immutable';
import {
    LOGIN,
    LOGOUT,
    LOGIN_CAMPAING,
    LOGOUT_CAMPAING,
    INJECT_CALL,
} from './actions';
import { campaings, deudores } from './mock-data';

const INITIAL_STATE = fromJS({ users: {}, campaings, deudores });

export function discadorApp(state = INITIAL_STATE, action) {
    return state.updateIn(['users'], users => usersReducer(users, action));
}

function usersReducer(state = Map(), action) {
    switch (action.type) {
        case LOGIN:
            return state.set(
                action.data.agent,
                fromJS({
                    agent: action.data.agent,
                    pass: action.data.pass,
                    station: action.data.station,
                    host: action.data.host,
                    campaing: undefined,
                    contactData: undefined,
                    break: false,
                    status: 'Available',
                }),
            );
        case LOGOUT:
            return state.delete(action.agent);
        case LOGIN_CAMPAING:
            return state.setIn(
                [action.data.agent, 'campaing'],
                action.data.campaing,
            );
        case LOGOUT_CAMPAING:
            return state.setIn([action.data.agent, 'campaing'], null);
        case INJECT_CALL:
            let deudor = state.getIn(['deudores', 0]);
            return state
                .updateIn(['users', action.agent], agent => {
                    agent.set(
                        'contactData',
                        fromJS({ is_att_Rut_cliente: deudor }),
                    );
                })
                .updateIn(['deudores'], deudores => deudores.pop())
                .updateIn(['deudores'], deudores => deudores.push(deudor));
        default:
            return state;
    }
}
