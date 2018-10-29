import { Model } from "../store/Helpers";
import { Increment } from './Increment';


export interface IAppState {
    increment?: Increment;
}

export const AppStateModel = Model<IAppState>({
    increment : new Increment(),

});

export class AppState extends AppStateModel {
    public increment: Increment;
}

