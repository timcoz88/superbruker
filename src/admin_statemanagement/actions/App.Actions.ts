
import { ActionType, IAppAction } from './Helpers';

export interface IApplicationProps {
    openDrawer: () => IAppAction;
    closeDrawer: () => IAppAction;
}

export const openDrawer = (): IAppAction => {
    return {
        type: ActionType.OPEN_DRAWER
    };
};

export const closeDrawer = (): IAppAction => {
    return {
        type: ActionType.CLOSE_DRAWER
    };
};


