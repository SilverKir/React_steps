import { StepServiceInterface } from './StepServiceInterface';
import { StepList } from '../repository/StepList';

export class StepService implements StepServiceInterface

stepList = new StepList();

    add(step: Step) {
    StepList.addStep(step);
    return step;
}

findAll(): StepList {
    throw new Error('Method not implemented.');
}
findById(id: number): Step {
    throw new Error('Method not implemented.');
}
deleteById(id: number): void {
    throw new Error('Method not implemented.');
}
updateById(id: number, step: Step): Step {
    throw new Error('Method not implemented.');
}

}
