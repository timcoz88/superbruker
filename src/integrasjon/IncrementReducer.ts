import { ActionType, IAppAction } from './ActionTypeHelpers';
import { Increment } from './Increment';

export const IncrementReducer = (state: Increment = new Increment(), action: IAppAction): Increment => {
  

    switch (action.type) {
        case ActionType.INCREMENT:
        return state.set(Increment.INCREMENT, state.increment + 1) as Increment;

        default:
            return state;
    }
};