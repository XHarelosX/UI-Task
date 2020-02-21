import React, { Fragment } from 'react'
import { activity } from './ActivityMockData/Activity'

const activity_List: React.FC = () => {

    return (
        <Fragment>
            <ul>
                <li></li>
                {activity.map(item => {
                    return (
                        <li key={item.activity.id}>
                            {item.activity.username}
                        </li>
                    )
                })}

            </ul>
        </Fragment >
    )
}

export default activity_List;
