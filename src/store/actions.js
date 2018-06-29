/*
*   action types
*/
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_CAMPAING = 'LOGIN_CAMPAING';
export const LOGOUT_CAMPAING = 'LOGOUT_CAMPAING';
export const INJECT_CALL = 'INJECT_CALL';

/*
*   action creators
*/
export function login(agent, pass, station, host) {
    return { type: LOGIN, data: { agent, pass, station, host } };
}

export function logout(agent) {
    return { type: LOGOUT, agent };
}

export function loginCampaing(agent, campaing) {
    return { type: LOGIN_CAMPAING, data: { agent, campaing } };
}

export function logoutCampaing(agent, campaing) {
    return { type: LOGOUT_CAMPAING, data: { agent, campaing } };
}

export function injectCall(agent) {
    return { type: INJECT_CALL, agent };
}
