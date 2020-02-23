import React, { Fragment } from 'react'
import { activity } from './ActivityMockData/Activity'
import classes from './Activity.module.css'

const activity_List: React.FC = () => {

    return (
        <Fragment>
            <ul className={classes.ul}>
                <li className={classes.li_title_container}>
                    <div className={classes.li_title}>Activity</div>
                    <div className={classes.li_activitys_number}>
                        <span className={classes.span_number_1}>10</span>
                    </div>
                </li>
                {
                    activity.map(item => {
                        return (
                            <li key={item.activity.id} className={classes.li_activity}>
                                <i className={["material-icons", classes.profile_icon].join(" ")}> account_circle </i>
                                <div className={classes.activity_conteiner}>
                                    <span className={classes.activity_username}>{item.activity.username} </span>
                                    <span className={classes.activity_action}>{item.activity.activity} </span>
                                    <span className={classes.activity_on_task}>{item.activity.activity_on_task}</span>
                                    <div className={classes.activity_time_conteiner}>
                                        <i className={["material-icons", classes.clock_icon].join(" ")}> query_builder </i>
                                        {item.activity.datetime}
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </Fragment >
    )
}

export default activity_List;
