import { Queue } from './Queue';
import { Model } from "./Helpers";


export interface IAppState {
    queue?: Queue;
}

export const AppStateModel = Model<IAppState>({
    queue: new Queue()
});

export class AppState extends AppStateModel {
    public static QUEUE = 'queue';
    public queue: Queue;
}

