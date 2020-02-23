import React, { Fragment } from 'react'
import { messages } from './MessagesMockData/Messages';
import classes from './Messages.module.css';
const messages_List: React.FC = () => {

    return (
        <Fragment>

            <ul className={classes.ul}>
                <li className={classes.li_title_container}>
                    <div className={classes.li_title}>Messages</div>
                    <div className={classes.li_messages_number}>
                        <span className={classes.span_number_1}>2</span>
                    </div>
                </li>
                {messages.map(item => {
                    return (
                        <li key={item.message.id} className={classes.li_message}>
                            <i className={["material-icons", classes.profile_icon].join(" ")}> account_circle </i>
                            <div className={classes.message_conteiner}>
                                <span className={classes.message_username}>
                                    {item.message.username}
                                    <span className={classes.message_time_conteiner}> {item.message.datetime}</span>
                                </span>
                                <div className={classes.message_action}>{item.message.text_message} </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </Fragment >
    )
}

export default messages_List;
