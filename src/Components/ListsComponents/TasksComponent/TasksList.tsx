import React, { Fragment } from 'react'
import { tasks } from './TasksMockData/Tasks';
import classes from './Tasks.module.css'

const tasks_List: React.FC = () => {

    return (
        <Fragment>
            <ul className={classes.ul}>
                <li className={classes.li_title_container}>
                    <div className={classes.li_title}>Tasks</div>
                    <div className={classes.li_tasks_number}>
                        <span className={classes.span_number_1}>5</span>
                        <span className={classes.span_number_2}>2</span>
                    </div>
                </li>
                {tasks.map(item => {
                    return (
                        <li key={item.task.id} className={classes.li_task}>
                            <div className={classes.task_symbol_conteainer}>
                                <div className={classes.task_symbol}>{item.task.symbol}</div>
                            </div>
                            <div className={classes.task_conteiner}>
                                <div className={classes.task_username}>{item.task.title}</div>
                                <div className={classes.task_time_conteiner}> {item.task.status}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </Fragment >
    )
}

export default tasks_List;
