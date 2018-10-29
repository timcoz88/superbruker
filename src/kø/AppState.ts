import { Model } from "../admin_statemanagement/state/Helpers";
import { Queue } from './Queue';


export interface IAppState {
    queue?: Queue;
}

export const AppStateModel = Model<IAppState>({
    queue: new Queue(),

});

export class AppState extends AppStateModel {
    public queue: Queue;
}

