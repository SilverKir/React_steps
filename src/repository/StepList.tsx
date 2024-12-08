import { Step } from "../model/Step";
import { StepRepositoryInterface } from "../repository/StepRepositoryInterface";

export class StepList implements StepRepositoryInterface {
    stepList: Array<{
        id: number;
        step: Step;
    }> = [];

    addStepByDate(step: Step) {
        const index = this.getStepIndexByDate(step.date);
        if (index === -1) {
            this.addStep(step);
        } else {
            const dictance = this.stepList[index].step.distance + step.distance;
            this.stepList[index].step.distance = dictance;
        }
    }


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
        const element = this.stepList.find(el => el.id === id);
        if (element === undefined) {
            throw new Error('Step not found');
        } else {
            return element
        }
    }

    getStepIndexByDate(date: Date): number {
        return this.stepList.findIndex(el => Number(new Date(el.step.date)) === Number(new Date(date)));
    }

    getStepIndexById(id: number): number {
        return this.stepList.findIndex(el => el.id === id);

    }


    deleteStep(id: number) {
        this.stepList.map((el, index) => {
            if (el.id === id) {
                this.stepList.splice(index, 1);
            }
        })
    };

    updateStep(id: number, step: Step) {
        this.stepList[this.getStepIndexById(id)].step = step;
    };


}