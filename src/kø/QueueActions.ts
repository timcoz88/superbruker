
import { ActionType, IAppAction } from './ActionTypeHelpers';

export interface IApplicationProps {
    enableQueue: () => IAppAction;
    disableQueue: () => IAppAction;
}

export const enableQueue = (): IAppAction => {
    return {
        type: ActionType.ENABLE_QUEUE
    };
};

export const disableQueue = (): IAppAction => {
    return {
        type: ActionType.DISABLED_QUEUE
    };
};


