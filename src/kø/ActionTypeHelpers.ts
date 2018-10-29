import { Action } from "redux";

export enum ActionType {
    ENABLE_QUEUE,
    DISABLED_QUEUE,
 
}



export interface IAppAction extends Action<ActionType> {
    payload?: any;
}