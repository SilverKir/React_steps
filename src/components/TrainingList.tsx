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

    return (
        <div>
            <h2>Список тренировок</h2>
            <table>
                <thead>
                    <tr>
                        <th>Дата (ДД.ММ.ГГ)</th>
                        <th>Пройдено км</th>
                    </tr>
                    {
                        props.stepList.getSortedByDate().map((el) => (
                            <tr key={el.id}>
                                <td>{el.step.date.toLocaleDateString()}</td>
                                <td>{el.step.distance}</td>
                                <td><button className={classes['button-edit']} type="submit">Edit</button></td>
                                <td><button className={classes['button-delete']} type="submit" onClick={() => handleDelete(el.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </thead>

            </table>
        </div>


    )
}


export default TrainingList
