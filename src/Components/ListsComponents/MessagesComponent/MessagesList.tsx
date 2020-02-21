import React, { Fragment } from 'react'
import { messages } from './MessagesMockData/Messages';

const messages_List: React.FC = () => {

    return (
        <Fragment>
            
            <ul>
                {messages.map( item => { return (
                        <li>
                            {item.message.username}
                        </li>
                    )
                })}

            </ul>
        </Fragment >
    )
}

export default messages_List;
