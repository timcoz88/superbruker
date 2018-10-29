import { Action } from "redux";

export enum ActionType {
    INCREMENT
}



export interface IAppAction extends Action<ActionType> {
    payload?: any;
}