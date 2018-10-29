import { Model } from "../admin_statemanagement/state/Helpers";

export interface IIncrement {
    increment?: number;
}

export const IncrementModel = Model<IIncrement>({
    increment: 0,
});

export class Increment extends IncrementModel {
    public static INCREMENT = 'increment';
    public increment: number;
}
