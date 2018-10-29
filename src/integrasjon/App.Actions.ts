
import { ActionType, IAppAction } from './Helpers';

export interface IApplicationProps {
    incrementCounter : () => IAppAction;
}

export const incrementCounter = ():  IAppAction => {
    return {
        type: ActionType.INCREMENT
    };
};


