import React, { Fragment } from 'react'
import { activity } from './ActivityMockData/Activity'
import classes from './Activity.module.css'

const activity_List: React.FC = () => {

    return (
        <Fragment>
            <ul className={classes.ul}>
                <li className={classes.li_title}>Activity</li>
                {
                    activity.map(item => {
                        return (
                            <li key={item.activity.id} className={classes.li_activity}>
                                <i className="material-icons"> account_circle </i>
                                {item.activity.username}
                            </li>
                        )
                    })
                }
            </ul>
        </Fragment >
    )
}

export default activity_List;
