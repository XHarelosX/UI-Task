import React, { Fragment } from 'react'
import { tasks } from './TasksMockData/Tasks';

const tasks_List: React.FC = () => {

    return (
        <Fragment>
            <ul>
                {tasks.map(item => {
                    return (
                        <li>
                            {item.message.username}
                        </li>
                    )
                })}

            </ul>
        </Fragment >
    )
}

export default tasks_List;
