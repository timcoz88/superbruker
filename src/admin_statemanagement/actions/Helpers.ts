import { Action } from "redux";

export enum ActionType {
    ENABLE_QUEUE,
    DISABLED_QUEUE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    INCREMENT
}



export interface IAppAction extends Action<ActionType> {
    payload?: any;
}