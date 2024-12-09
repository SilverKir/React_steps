import React from 'react'
import { StepList } from '../repository/StepList'
import classes from './TrainingList.module.css'

function TrainingList(props: { stepList: StepList }) {

    const [click, setForm] = React.useState(
        { click: props.stepList, }
    )

    const handleDelete = (id: number) => {
        setForm({
            ...click,
            click: props.stepList,
        });
        props.stepList.deleteStep(id)
    }


    const handleEdit = (id: number) => {
        setForm({
            ...click,
            click: props.stepList,
        });

        const distanceElement = document.getElementById("distance") as HTMLInputElement;
        if (distanceElement) {
            distanceElement.value = props.stepList.getStepById(id).step.distance.toString();
        }

        const dateElement = document.getElementById("date") as HTMLInputElement;
        if (dateElement) {
            dateElement.value = props.stepList.getStepById(id).step.date.toISOString().slice(0, 10);
        }

        props.stepList.deleteStep(id)
    }


    return (
        <div className={classes["training-records"]}>
            <table>
                <thead >
                    <tr>
                        <th>Дата (ДД.ММ.ГГ)</th>
                        <th>Пройдено км</th>
                        <th>Действия</th>
                    </tr>

                    {
                        props.stepList.getSortedByDate().map((el) => (
                            <tr key={el.id} className={classes['form-group']}>
                                <td>{el.step.date.toLocaleDateString()}</td>
                                <td>{el.step.distance}</td>

                                <td>
                                    <button className={classes['button-edit']} type="submit" onClick={() => handleEdit(el.id)}>Edit</button>
                                    <button className={classes['button-delete']} type="submit" onClick={() => handleDelete(el.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </thead>
            </table>
        </div>


    )
}


export default TrainingList
