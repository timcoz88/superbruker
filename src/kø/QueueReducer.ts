import { ActionType, IAppAction } from './ActionTypeHelpers';
import { Queue } from './Queue';

export const QueueReducer = (state: Queue = new Queue(), action: IAppAction): Queue => {
    switch (action.type) {
        case ActionType.ENABLE_QUEUE:
            return state.set(Queue.ENABLE_QUEUE, true) as Queue;
        case ActionType.DISABLED_QUEUE:
            return state.set(Queue.ENABLE_QUEUE, false) as Queue;
        default:
            return state;
    }
};