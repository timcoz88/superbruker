
import { ActionType, IAppAction } from './ActionTypeHelpers';

export interface IApplicationProps {
    incrementCounter : () => IAppAction;
}

export const incrementCounter = ():  IAppAction => {
    return {
        type: ActionType.INCREMENT
    };
};


