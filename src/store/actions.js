/*
*   action types
*/
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

/*
*   action creators
*/
export function login(agent, pass, station, host) {
    return { type: LOGIN, data: { agent, pass, station, host } };
}

export function logout(agent) {
    return { type: LOGOUT, agent };
}
