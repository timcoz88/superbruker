import { Model } from "../store/Helpers";
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

