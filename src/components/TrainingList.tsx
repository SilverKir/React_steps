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
            <table className={classes['data-table']}>
                <thead >
                    <tr className={classes['columns-names']}>
                        <th>Дата (ДД.ММ.ГГ)</th>
                        <th>Пройдено км</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody className={classes['table-body']}>
                    {
                        props.stepList.getSortedByDate().map((el) => (

                            <tr key={el.id} className={classes['data-row']}>
                                <td>{el.step.date.toLocaleDateString()}</td>
                                <td>{el.step.distance}</td>

                                <td>
                                    <button className={`${classes.buttons} ${classes.buttonEdit}`} type="submit" onClick={() => handleEdit(el.id)}></button>
                                    <button className={`${classes.buttons} ${classes.buttonDelete}`} type="submit" onClick={() => handleDelete(el.id)}></button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>

            </table>
        </div>


    )
}


export default TrainingList
