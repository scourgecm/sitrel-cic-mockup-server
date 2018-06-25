import { LOGIN, LOGOUT } from './actions';
import { campaings, deudores } from './mock-data';

export function discadorApp(state = {}, action) {
    return {
        users: users(state.users, action),
        campaigns: campaings,
        deudores: deudores,
    };
}

function users(state = [], action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                [action.data.agent]: {
                    agent: action.data.agent,
                    pass: action.data.pass,
                    station: action.data.station,
                    host: action.data.host,
                },
            });
        case LOGOUT:
            return Object.assign({}, state, {
                [action.agent]: undefined,
            });
        default:
            return state;
    }
}
