import React from 'react'

import { StepList } from '../repository/StepList';
import classes from './TrainingRecords.module.css'

function TrainingRecords() {

    const stepList = new StepList();

    // const [step, setForm] = React.useState(
    //     {
    //         date: Date.now(),
    //         distance: 0,
    //     })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const date = new Date(formData.get('date') as string);
        const distance = Number(formData.get('distance'));
        stepList.addStep({ date, distance });
        console.log(stepList.getSortedByDate());
        event.currentTarget.reset();
    }

    return (
        <div className={classes["container"]}>
            <form className={classes["main-form"]} onSubmit={handleSubmit}>
                <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                <label htmlFor="distance">Пройдено км</label>
                <div className={classes["form-group"]}>
                    <input type="date" id="date" name="date" />
                    <input type="number" step="0.001" id="distance" name="distance" />
                    <button className={classes['button-submit']} type="submit">OK</button>
                </div>
            </form>

            <div className={classes["training-records"]}>

            </div>
        </div>
    )
}

export default TrainingRecords