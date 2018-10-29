import { Model } from "./Helpers";
import { Increment } from './Increment';
import { Queue } from './Queue';


export interface IAppState {
    queue?: Queue;
    increment?: Increment;
}

export const AppStateModel = Model<IAppState>({
    increment : new Increment(),
    queue: new Queue(),

});

export class AppState extends AppStateModel {
    public queue: Queue;
    public increment: Increment;
}

