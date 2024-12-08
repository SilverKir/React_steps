
import { Step } from "../model/Step";
import { StepList } from "../repository/StepList";

export interface StepServiceInterface {
    add(step: Step): Step;
    findAll(): StepList;
    findById(id: number): Step;
    deleteById(id: number): void;
    updateById(id: number, step: Step): Step;

}