import { Model } from "../store/Helpers";

export interface IQueue {
    enableQueue?: boolean;
}

export const QueueModel = Model<IQueue>({
    enableQueue: false,
});

export class Queue extends QueueModel {
    public static ENABLE_QUEUE = 'enableQueue';
    public enableQueue: boolean;
}
