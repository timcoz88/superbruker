import { Queue } from './Queue';
import { Increment } from './Increment';
import { Model } from "./Helpers";


export interface IAppState {
    queue?: Queue;
    increment?: Increment;
}

export const AppStateModel = Model<IAppState>({
    queue: new Queue(),
    increment : new Increment()

});

export class AppState extends AppStateModel {
    public queue: Queue;
    public increment: Increment;
}

