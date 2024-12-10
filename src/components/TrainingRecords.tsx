import React from 'react'

import { StepList } from '../repository/StepList';
import classes from './TrainingRecords.module.css'
import TrainingList from './TrainingList';

function TrainingRecords() {

    const [step, setForm] = React.useState(
        {
            date: Date.now(),
            distance: 0,
            stepList: new StepList(),
        })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const date = new Date(formData.get('date') as string);
        const distance = Number(formData.get('distance'));

        if (date > new Date() || isNaN(date.getTime())) {
            alert('Введите корректную дату');
            return;
        }
        if (isNaN(distance) || distance <= 0) {
            alert('Введите корректно число');
            return;
        }
        step.stepList.addStepByDate({ date, distance });
        setForm({
            ...step,
            stepList: step.stepList,
        });
        event.currentTarget.reset();
    }


    return (
        <div className={classes["container"]}>
            <form className={classes["main-form"]} onSubmit={handleSubmit}>
                <div className={classes["columns-names"]}>
                    <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                    <label htmlFor="distance">Пройдено км</label>
                </div>
                <div className={classes["form-group"]}>
                    <input type="date" id="date" name="date" />
                    <input type="number" step="0.001" id="distance" name="distance" />
                    <button className={classes['button-submit']} type="submit">OK</button>
                </div>
            </form>

            <TrainingList stepList={step.stepList} />
        </div>
    )
}
export default TrainingRecords