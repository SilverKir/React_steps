
import { StepInterface } from "./StepInterface";

export class Step implements StepInterface {
    date: Date;
    distance: number;

    constructor(date: Date, distance: number) {
        this.date = date;
        this.distance = distance;
    }
}