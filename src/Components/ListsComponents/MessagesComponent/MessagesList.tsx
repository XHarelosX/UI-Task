import React, { Fragment } from 'react'
import { messages } from './MessagesMockData/Messages';

const messages_List: React.FC = () => {

    return (
        <Fragment>

            <ul>
                <li>Messages</li>
                {messages.map(item => {
                    return (
                        <li key={item.message.id}>
                            {item.message.username}
                        </li>
                    )
                })}
            </ul>
        </Fragment >
    )
}

export default messages_List;
