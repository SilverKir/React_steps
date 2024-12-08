import "../model";
import { Step } from "../model/Step";

export interface StepRepositoryInterface {

    stepList: Array<{
        id: number;
        step: Step;
    }>;

    addStep(step: Step): void;

    getStepList(): Array<{
        id: number;
        step: Step;
    }>;
    getStepById(id: number): {
        id: number;
        step: Step;
    };
    deleteStep(id: number): void;
    updateStep(id: number, step: Step): void;

}
