import React, { Fragment } from 'react'
import { tasks } from './TasksMockData/Tasks';

const tasks_List: React.FC = () => {

    return (
        <Fragment>
            <ul>
                <li>Tasks</li>
                {tasks.map(item => {
                    return (
                        <li key={item.task.id}>
                            {item.task.title}
                        </li>
                    )
                })}
            </ul>
        </Fragment >
    )
}

export default tasks_List;
