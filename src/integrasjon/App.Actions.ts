
import { ActionType, IAppAction } from './Helpers';

export interface IApplicationProps {
    incrementStuff : () => IAppAction;
}
export const incrementStuff = ():  IAppAction => {
    return {
        type: ActionType.INCREMENT
    };
};


