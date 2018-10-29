import { Model } from "../store/Helpers";

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
