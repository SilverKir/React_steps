import { Step } from "../model/Step";
import { StepRepositoryInterface } from "../repository/StepRepositoryInterface";

export class StepList implements StepRepositoryInterface {
    stepList: Array<{
        id: number;
        step: Step;
    }> = [];

    addStep(step: Step) {
        let newId: number;

        if (this.stepList.length === 0) {
            newId = 0;
        } else {
            newId = this.getStepList()[this.stepList.length - 1].id + 1;
        }

        this.stepList.push({
            id: newId,
            step: step
        });
    };

    getStepList(): Array<{ id: number; step: Step; }> {
        return this.stepList.sort((a, b) => a.id - b.id);
    }

    getSortedByDate(): Array<{ id: number; step: Step; }> {
        return this.stepList.sort((b, a) => Number(new Date(a.step.date)) - Number(new Date(b.step.date)));
    }

    getStepById(id: number): {
        id: number;
        step: Step;
    } {
        return this.stepList[id];
    };


    deleteStep(id: number) {
        this.stepList.splice(id, 1);
    };

    updateStep(id: number, step: Step) {
        this.stepList[id].step = step;
    };

}